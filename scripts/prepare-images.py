"""Generate web derivatives only. Original files and their names remain untouched."""
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFilter
import json, base64, io, sys

ROOT = Path(__file__).resolve().parents[1]

# Targeted, repeatable import of selected originals. HEIC decoding uses macOS;
# output dimensions retain the original aspect ratio (no crop or enlargement).
if '--selection' in sys.argv:
    import subprocess, tempfile
    manifest = ROOT / sys.argv[sys.argv.index('--selection') + 1]
    metadata_path = ROOT / 'src/image-variants.json'
    metadata = json.loads(metadata_path.read_text())
    for item in json.loads(manifest.read_text()):
        source = (ROOT / item['source']).resolve()
        output = (ROOT / 'public' / item['output'].lstrip('/')).resolve()
        if not source.is_relative_to(ROOT / 'originals') or not output.is_relative_to(ROOT / 'public/images') or output.suffix != '.webp':
            raise SystemExit('Selection must read originals and write WebP image assets.')
        with tempfile.TemporaryDirectory(prefix='dimora-image-') as temporary:
            decoded = source
            if source.suffix.lower() == '.heic':
                decoded = Path(temporary) / 'decoded.jpg'
                subprocess.run(['sips', '-s', 'format', 'jpeg', str(source), '--out', str(decoded)], check=True, stdout=subprocess.DEVNULL)
            with Image.open(decoded) as original:
                im = ImageOps.exif_transpose(original).convert('RGB')
            im.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
            output.parent.mkdir(parents=True, exist_ok=True)
            im.save(output, 'WEBP', quality=82, method=6)
            variants = []
            for width in [480, 960]:
                if im.width > width:
                    variant = output.with_name(f'{output.stem}-{width}.webp')
                    im.resize((width, round(im.height * width / im.width)), Image.Resampling.LANCZOS).save(variant, 'WEBP', quality=80, method=6)
                    variants.append(f'/{variant.relative_to(ROOT / "public")} {width}w')
            url = '/' + str(output.relative_to(ROOT / 'public'))
            variants.append(f'{url} {im.width}w')
            metadata[url] = {'width': im.width, 'height': im.height, 'srcSet': ', '.join(variants)}
            print(f'{output.name}: {im.width}x{im.height}, {output.stat().st_size} bytes')
    metadata_path.write_text(json.dumps(metadata, indent=2) + '\n')
    raise SystemExit(0)

# Import only the owner's three territory photographs, without touching existing
# room photographs or brand assets. Metadata is generated, never hand-edited.
if '--territory' in sys.argv:
    import shutil
    inputs = sys.argv[sys.argv.index('--territory') + 1:]
    if len(inputs) != 3:
        raise SystemExit('Usage: prepare-images.py --territory garden.jpeg tiles.jpeg fountain.jpeg')
    names = ['villa-italia-ceramiche', 'muro-ceramiche-belvedere', 'fontana-ceramica-mare']
    archive = ROOT / 'originals/territorio-proprietario-2026-09-27'
    archive.mkdir(parents=True, exist_ok=True)
    destination = ROOT / 'public/images/bnb/territorio'
    metadata_path = ROOT / 'src/image-variants.json'
    metadata = json.loads(metadata_path.read_text())
    for source, name in zip(map(Path, inputs), names):
        original = archive / source.name
        if original.exists() and original.read_bytes() != source.read_bytes():
            raise SystemExit(f'Original already exists with different content: {original}')
        if not original.exists():
            shutil.copy2(source, original)
        im = ImageOps.exif_transpose(Image.open(original)).convert('RGB')
        im.thumbnail((1440, 1440), Image.Resampling.LANCZOS)
        output = destination / f'{name}.webp'
        im.save(output, 'WEBP', quality=82, method=6)
        variants = []
        for width in [480, 960]:
            if im.width > width:
                variant = output.with_name(f'{name}-{width}.webp')
                im.resize((width, round(im.height * width / im.width)), Image.Resampling.LANCZOS).save(variant, 'WEBP', quality=80, method=6)
                variants.append(f'/{variant.relative_to(ROOT / "public")} {width}w')
        url = '/' + str(output.relative_to(ROOT / 'public'))
        variants.append(f'{url} {im.width}w')
        metadata[url] = {'width': im.width, 'height': im.height, 'srcSet': ', '.join(variants)}
        print(f'{output.name}: {im.width}x{im.height}, {output.stat().st_size} bytes')
    metadata_path.write_text(json.dumps(metadata, indent=2) + '\n')
    raise SystemExit(0)

# Small lossless derivative for the header; preserve the existing PNG.
if '--logo-webp' in sys.argv:
    source = ROOT / 'public/images/brand/logo-la-dimora-dei-ricci.png'
    Image.open(source).save(source.with_suffix('.webp'), 'WEBP', lossless=True, method=6)
    print('Lossless WebP logo generated; PNG preserved.')
    raise SystemExit(0)

originals = ROOT / 'originals/foto-bnb-2026-09-14/Webp foto BnB'
brand = ROOT / 'public/images/brand'; brand.mkdir(parents=True, exist_ok=True)
icons = ROOT / 'public/icons'; icons.mkdir(parents=True, exist_ok=True)
def trimmed(name):
    im = Image.open(originals / name).convert('RGBA')
    return im.crop(im.getchannel('A').getbbox())
logo = trimmed('Logo 1.png')
logo.thumbnail((600, 240), Image.Resampling.LANCZOS)
logo.save(brand / 'logo-la-dimora-dei-ricci.png', optimize=True)
symbol = trimmed('Logo 2.png')
symbol.save(brand / 'simbolo-riccio-la-dimora.png', optimize=True)
def icon_alpha(size):
    alpha = Image.new('L', (size, size), 0)
    mark = ImageOps.contain(symbol.getchannel('A'), (round(size*.90), round(size*.90)), Image.Resampling.LANCZOS)
    alpha.paste(mark, ((size-mark.width)//2, (size-mark.height)//2))
    return alpha

# Transparent fallback: a narrow contour follows the animal, never a square.
# Supersampling retains the small-scale silhouette and keeps edges smooth.
for size in [16, 32, 48, 180, 192, 512]:
    alpha = icon_alpha(size*4)
    radius = max(2, round(size*.008*4))
    outline = Image.new('RGBA', alpha.size, '#fffdf8')
    outline.putalpha(alpha.filter(ImageFilter.MaxFilter(radius*2+1)))
    mark = Image.new('RGBA', alpha.size, '#702b32'); mark.putalpha(alpha)
    outline.alpha_composite(mark)
    outline.resize((size,size), Image.Resampling.LANCZOS).save(icons / f'riccio-{size}.png', optimize=True)
    dark = Image.new('RGBA', alpha.size, '#fffdf8'); dark.putalpha(alpha)
    dark.resize((size,size), Image.Resampling.LANCZOS).save(icons / f'riccio-dark-{size}.png', optimize=True)
Image.open(icons / 'riccio-48.png').save(ROOT / 'public/favicon.ico', sizes=[(16,16),(32,32),(48,48)], append_images=[Image.open(icons/'riccio-16.png'),Image.open(icons/'riccio-32.png')])

# Adaptive SVG uses the original logo alpha, not a newly drawn approximation.
mask = Image.new('RGBA', (128,128), 'white'); mask.putalpha(icon_alpha(128))
buffer = io.BytesIO(); mask.save(buffer, format='PNG', optimize=True)
data = base64.b64encode(buffer.getvalue()).decode('ascii')
(ROOT/'public/favicon.svg').write_text(f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
<style>rect{{fill:#702b32}}@media(prefers-color-scheme:dark){{rect{{fill:#fffdf8}}}}</style>
<defs><mask id="riccio"><image width="128" height="128" href="data:image/png;base64,{data}"/></mask></defs>
<rect width="128" height="128" mask="url(#riccio)"/>
</svg>''')
comparison = Image.new('RGB', (640,220), '#fffdf8')
d=ImageDraw.Draw(comparison)
d.rectangle((0,110,640,220),fill='#202124')
for row,bg in enumerate(['#fffdf8','#202124']):
    for i,s in enumerate([16,32,48]):
        im=Image.open(icons/f'riccio-{s}.png')
        x=20+i*140; y=row*110
        comparison.paste(im,(x,y+40),im)
        d.text((x,y+12),f'{s}px fallback',fill='#261c19' if row==0 else '#fffdf8')
    im=Image.open(icons/('riccio-32.png' if row==0 else 'riccio-dark-32.png'))
    comparison.paste(im,(470,row*110+40),im)
    d.text((470,row*110+12),'32px theme',fill='#261c19' if row==0 else '#fffdf8')
comparison.save(ROOT/'audit/favicon-dimensioni-reali.png')
if '--icons-only' in sys.argv:
    print('Transparent icons regenerated; original logo and photographs preserved.')
    raise SystemExit(0)
metadata={}
for p in sorted((ROOT/'public/images/bnb').rglob('*.webp')):
    if p.stem.endswith(('-480','-960')): continue
    im=Image.open(p)
    variants=[]
    for width in [480,960]:
        if im.width > width:
            out=p.with_name(f'{p.stem}-{width}.webp')
            resized=im.resize((width,round(im.height*width/im.width)),Image.Resampling.LANCZOS)
            resized.save(out,'WEBP',quality=82,method=6)
            variants.append(f'/{out.relative_to(ROOT / "public")} {width}w')
    url='/'+str(p.relative_to(ROOT/'public'))
    variants.append(f'{url} {im.width}w')
    metadata[url]={'width':im.width,'height':im.height,'srcSet':', '.join(variants)}
(ROOT/'src/image-variants.json').write_text(json.dumps(metadata,indent=2)+'\n')
photos=sorted(originals.glob('*.webp'))
for start in [0,48]:
    contact=Image.new('RGB',(1200,1056),'#f4efe7'); draw=ImageDraw.Draw(contact)
    for j,p in enumerate(photos[start:start+48]):
        im=Image.open(p); im.thumbnail((144,112))
        x,y=(j%8)*150,(j//8)*176
        contact.paste(im,(x,y+24)); draw.text((x+2,y+5),p.stem,fill='black')
    contact.save(ROOT/f'audit/foto-originali-{start+1}.jpg',quality=85)
print('Logo web:',logo.size,'| Simbolo:',symbol.size,'| Immagini con varianti:',len(metadata))
print('Logo 2 / 3 stessi pixel:',Image.open(originals/'Logo 2.png').tobytes()==Image.open(originals/'Logo 3.png').tobytes())
