"""Read-only checks on the built site; writes a reproducible audit report."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json, gzip, hashlib, zipfile

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.tags = []; self.ids = []; self.json = ''; self.in_json = False
    def handle_starttag(self, tag, attrs):
        a = dict(attrs); self.tags.append((tag, a))
        if 'id' in a: self.ids.append(a['id'])
        if tag == 'script' and a.get('type') == 'application/ld+json': self.in_json = True
    def handle_endtag(self, tag):
        if tag == 'script': self.in_json = False
    def handle_data(self, text):
        if self.in_json: self.json += text

html = (DIST / 'index.html').read_text()
page = Page(); page.feed(html)
errors = []; refs = set()
for tag, a in page.tags:
    for key in ['src', 'href']:
        if key in a:
            url = urlsplit(a[key])
            if a[key].startswith('#') and url.fragment not in page.ids: errors.append('Ancora: ' + a[key])
            if a[key].startswith('/') and not url.netloc: refs.add(unquote(url.path))
    for key in ['srcset', 'imagesrcset']:
        for entry in a.get(key, '').split(','):
            if entry.strip(): refs.add(entry.strip().split()[0])
    if tag == 'img' and 'alt' not in a: errors.append('Alt mancante: ' + a.get('src', '?'))
for original, data in json.loads((ROOT / 'src/image-variants.json').read_text()).items():
    refs.add(original)
    refs.update(item.strip().split()[0] for item in data['srcSet'].split(','))
for path in refs:
    if not (DIST / path.lstrip('/')).is_file(): errors.append('Asset mancante: ' + path)
if len(page.ids) != len(set(page.ids)): errors.append('ID duplicati')
if sum(t == 'h1' for t, _ in page.tags) != 1: errors.append('Numero H1 non valido')
if sum(t == 'details' for t, _ in page.tags) != 10: errors.append('Numero FAQ inatteso')
schema = json.loads(page.json)
assert schema['@type'] == 'BedAndBreakfast'
assert 'aggregateRating' not in schema
canonical = next(a['href'] for t, a in page.tags if t == 'link' and a.get('rel') == 'canonical')
assert canonical.rstrip('/') == schema['url'].rstrip('/')
assert canonical in (DIST / 'sitemap.xml').read_text()
if schema.get('telephone') != '+393286421509': errors.append('Telefono Schema non aggiornato')
if 'checkinTime' in schema: errors.append('Check-in unico non compatibile con gli orari stagionali')
if '10:00 – 23:00' not in html or 'in estate dalle 10:00 alle 23:00' not in html: errors.append('Check-in estivo incompleto')
if 'Quattrocchi' in html or 'Quattro Occhi' in html: errors.append('Vecchia destinazione ancora presente')
if sum(a.get('href') == 'tel:+393286421509' for _, a in page.tags) != 2: errors.append('Contatti telefonici non coerenti')
for tag, a in page.tags:
    if tag == 'a' and a.get('target') == '_blank' and not {'noopener', 'noreferrer'}.issubset(set(a.get('rel', '').split())):
        errors.append('Rel mancante: ' + a.get('href', '?'))
terms = Page(); terms.feed((DIST / 'termini.html').read_text())
if sum(t == 'h1' for t, _ in terms.tags) != 1: errors.append('H1 Termini non valido')
if not {'it', 'en', 'de'}.issubset(set(terms.ids)): errors.append('Traduzioni Termini mancanti')
terms_url = canonical.rstrip('/') + '/termini.html'
if not any(t == 'link' and a.get('rel') == 'canonical' and a.get('href') == terms_url for t, a in terms.tags): errors.append('Canonical Termini non valido')
if terms_url not in (DIST / 'sitemap.xml').read_text(): errors.append('Termini mancanti in sitemap')
for tag, a in terms.tags:
    href = a.get('href', '')
    if href.startswith('#') and href[1:] not in terms.ids: errors.append('Ancora Termini: ' + href)
    if href.startswith('/') and not href.startswith('//'):
        local_path = urlsplit(href).path
        if local_path == '/': local_path = '/index.html'
        if not (DIST / local_path.lstrip('/')).is_file(): errors.append('File Termini mancante: ' + href)
if (DIST / 'privacy.html').read_bytes() != (ROOT / 'public/privacy.html').read_bytes(): errors.append('Privacy alterata')

baseline = json.loads((ROOT/'audit/inventario-iniziale.json').read_text())
preserved = all((ROOT/r['file']).is_file() and hashlib.sha256((ROOT/r['file']).read_bytes()).hexdigest() == r['sha256'] for r in baseline['assets'])
if not preserved: errors.append('Un asset originale è cambiato')
backup = ROOT.parent/'la-dimora-backup-prima-2026-09-14.zip'
with zipfile.ZipFile(backup) as z:
    changed = [n for n in z.namelist() if not n.endswith('/') and (ROOT/n).exists() and z.read(n) != (ROOT/n).read_bytes()]

def luminance(hex_color):
    v=[int(hex_color[i:i+2],16)/255 for i in [1,3,5]]
    v=[x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in v]
    return .2126*v[0]+.7152*v[1]+.0722*v[2]
def contrast(a,b):
    x,y=sorted([luminance(a),luminance(b)])
    return round((y+.05)/(x+.05),2)
if contrast('#ffffff', '#b94e34') < 4.5: errors.append('Contrasto hover insufficiente')
result = {
    'errors': errors, 'localAssetReferencesChecked': len(refs), 'originalAssetsUnchanged': preserved,
    'h1Count': sum(t=='h1' for t,_ in page.tags), 'faqCount': sum(t=='details' for t,_ in page.tags),
    'canonical': canonical, 'schemaType': schema['@type'], 'changedVsBackup': changed,
    'contrast': { 'white_on_primary': contrast('#ffffff','#a54b1c'), 'white_on_hover': contrast('#ffffff','#7d3514'), 'muted_on_ivory': contrast('#695c55','#f4efe7'), 'ink_on_paper': contrast('#261c19','#fffdf8'), 'wine_on_ivory': contrast('#702b32','#f4efe7') },
    'bundleBytes': [{'file':str(p.relative_to(DIST)), 'raw':p.stat().st_size, 'gzip':len(gzip.compress(p.read_bytes()))} for p in [DIST/'index.html', *sorted((DIST/'assets').glob('*'))]],
    'limits': 'Static checks, not a WCAG certification or field Core Web Vitals measurement.'
}
result['contrast']['white_on_secondary_hover'] = contrast('#ffffff', '#b94e34')
result['legalRoutesChecked'] = ['/privacy.html', '/termini.html']
(ROOT/'audit/verifica-finale.json').write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n')
print(json.dumps(result,indent=2,ensure_ascii=False))
if errors: raise SystemExit(1)
