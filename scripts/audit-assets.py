"""Inventory original and web assets without changing them."""
from pathlib import Path
from PIL import Image, ImageDraw
import hashlib, json, re

ROOT = Path(__file__).resolve().parents[1]
source = '\n'.join(p.read_text() for p in (ROOT / 'src').glob('*') if p.suffix in ('.tsx', '.ts', '.css'))
source += (ROOT / 'index.html').read_text()
records = []
for folder in ['public/images', 'originals']:
    for path in sorted((ROOT / folder).rglob('*')):
        if path.suffix.lower() not in ['.png', '.webp', '.jpg', '.jpeg']:
            continue
        im = Image.open(path)
        rel = str(path.relative_to(ROOT))
        records.append({'file': rel, 'bytes': path.stat().st_size, 'size': list(im.size), 'mode': im.mode, 'sha256': hashlib.sha256(path.read_bytes()).hexdigest(), 'referencedInitially': rel.removeprefix('public') in source if folder.startswith('public') else None})
groups = {}
for item in records:
    groups.setdefault(item['sha256'], []).append(item['file'])
result = {'assets': records, 'exactDuplicateGroups': [v for v in groups.values() if len(v) > 1], 'initialUnreferenced': [r['file'] for r in records if r['referencedInitially'] is False]}
(ROOT / 'audit/inventario-iniziale.json').write_text(json.dumps(result, indent=2, ensure_ascii=False))
logos = sorted((ROOT / 'originals').rglob('Logo *.png'))
sheet = Image.new('RGB', (960, 640), '#eee5d9')
d = ImageDraw.Draw(sheet)
for i, p in enumerate(logos):
    im = Image.open(p).convert('RGBA'); im.thumbnail((440, 270))
    x, y = (i % 2)*480, (i // 2)*320
    sheet.paste(im, (x+(480-im.width)//2, y+30), im)
    d.text((x+20, y+10), p.name, fill='black')
sheet.save(ROOT / 'audit/loghi-contatto.png')
print(json.dumps({'webAssets': sum(r['file'].startswith('public/') for r in records), 'originals': sum(r['file'].startswith('originals/') for r in records), 'unreferenced': result['initialUnreferenced'], 'duplicateGroups': len(result['exactDuplicateGroups']), 'logoMetadata': [r for r in records if '/Logo ' in r['file']]}, indent=2))
