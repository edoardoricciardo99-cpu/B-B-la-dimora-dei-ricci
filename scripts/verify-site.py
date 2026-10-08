"""Verify the built routes, links, metadata and confirmed property information.
Historical inventory/backup checks run when their inputs exist; missing evidence
is reported as a warning, never replaced by a newly invented baseline.
"""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import gzip
import hashlib
import json
import re
import subprocess
import zipfile
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
errors, warnings = [], []
GUIDE = '/guida-santo-stefano-di-camastra/'
ORIGIN = 'https://ladimoradeiricci.com'

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(); self.tags = []; self.ids = []; self.json = ''; self.in_json = False; self.text = []
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs); self.tags.append((tag, a))
        if 'id' in a: self.ids.append(a['id'])
        if tag == 'script' and a.get('type') == 'application/ld+json': self.in_json = True
    def handle_endtag(self, tag):
        if tag == 'script': self.in_json = False
    def handle_data(self, text):
        if self.in_json: self.json += text
        else: self.text.append(text)
    def meta(self, key):
        return next((a.get('content') for t, a in self.tags if t == 'meta' and (a.get('name') == key or a.get('property') == key)), None)
    def canonical(self):
        return next((a.get('href') for t, a in self.tags if t == 'link' and a.get('rel') == 'canonical'), None)

def check(condition, message):
    if not condition: errors.append(message)

def local_file(path):
    p = DIST / unquote(path).lstrip('/')
    return p / 'index.html' if p.is_dir() else p

routes = {'/': DIST/'index.html', GUIDE: DIST/GUIDE.strip('/')/'index.html', '/termini.html': DIST/'termini.html', '/privacy.html': DIST/'privacy.html'}
pages = {route: Page(file.read_text()) for route, file in routes.items()}
refs, external = set(), set()
for route, page in pages.items():
    check(len(page.ids) == len(set(page.ids)), f'ID duplicati: {route}')
    if route == '/privacy.html':
        # Existing multilingual legal document: preserve its three language headings.
        check(sum(t == 'h1' for t, _ in page.tags) == 3 and {'it', 'en', 'de'} <= set(page.ids), 'Struttura Privacy alterata')
    else:
        check(sum(t == 'h1' for t, _ in page.tags) == 1, f'H1 non unico: {route}')
    check(page.canonical() == ORIGIN + route, f'Canonical errato: {route}')
    for tag, attrs in page.tags:
        if tag == 'img':
            check(bool(attrs.get('alt', '').strip()), f'Alt descrittivo mancante: {route} {attrs.get("src")}')
            check('width' in attrs and 'height' in attrs, f'Dimensioni immagine mancanti: {attrs.get("src")}')
        for attr in ['href', 'src']:
            value = attrs.get(attr, '')
            parsed = urlsplit(value)
            if parsed.scheme in ['https', 'http']:
                external.add(value)
            if value.startswith('/') and not parsed.netloc:
                refs.add(parsed.path)
                target = local_file(parsed.path)
                check(target.is_file(), f'File locale mancante: {route} -> {value}')
                if parsed.fragment and target.suffix == '.html' and target.is_file():
                    check(unquote(parsed.fragment) in Page(target.read_text()).ids, f'Ancora destinazione assente: {value}')
            elif value.startswith('#'):
                check(unquote(parsed.fragment) in page.ids, f'Ancora assente: {route} {value}')
            if parsed.netloc == 'wa.me':
                check(parsed.path == '/393270084357', f'WhatsApp errato: {value}')
            if parsed.scheme == 'tel':
                check(parsed.path == '+393286421509', f'Telefono chiamate errato: {value}')
            if parsed.scheme == 'mailto':
                check(parsed.path == 'ladimoradeiricci@gmail.com', f'Email errata: {value}')
        for attr in ['srcset', 'imagesrcset']:
            for item in attrs.get(attr, '').split(','):
                if item.strip():
                    path = item.strip().split()[0]; refs.add(path)
                    check(local_file(path).is_file(), f'Variante mancante: {path}')
        if attrs.get('target') == '_blank':
            check({'noopener', 'noreferrer'} <= set(attrs.get('rel', '').split()), f'Rel mancante: {attrs.get("href")}')

model = json.loads(subprocess.check_output(['node', '--input-type=module', '-e', "const m = await import('./.prerender/prerender.js'); console.log(JSON.stringify({seo:m.seo,social:m.socialSeo,site:m.site,copy:m.copy,rooms:m.rooms,faqs:m.faqs,info:m.stayInfo,guide:m.guideSections,guideCopy:m.guideCopy,reviews:m.reviews,benefits:m.stayBenefits,destinations:m.allHomeDestinations}));"], cwd=ROOT, text=True))
home, guide = pages['/'], pages[GUIDE]
home_html = routes['/'].read_text()
check('<h1>La Dimora dei Ricci</h1>' in home_html, 'H1 homepage modificato')
check(sum(t == 'details' and a.get('id', '').startswith('faq-') for t, a in home.tags) == 8, 'Attese otto FAQ nella homepage')
for page, seo, social in [(home, model['seo']['it'], model['social']['it']), (guide, model['guideCopy']['it'], model['guideCopy']['it'])]:
    check(page.meta('description') == seo['description'], 'Meta description non sincronizzata')
    check(page.meta('og:title') == social['title'], 'OG title non sincronizzato')
    check(page.meta('og:description') == social['description'], 'OG description non sincronizzata')
    check(page.meta('twitter:title') == social['title'], 'Twitter title non sincronizzato')
    check(page.meta('twitter:description') == social['description'], 'Twitter description non sincronizzata')
    check(page.meta('og:url') == page.canonical(), 'OG URL non coerente')
check(model['seo']['it']['title'] == 'B&B Santo Stefano di Camastra | La Dimora dei Ricci', 'SEO title homepage errato')
check('★' in ''.join(home.text) and '4,9' in ''.join(home.text), 'Rating hero mancante')
schema = json.loads(home.json)
check(schema['@type'] == 'BedAndBreakfast', 'Tipo Schema errato')
check('aggregateRating' not in schema and 'review' not in schema, 'Markup recensioni non consentito')
check(schema['telephone'] == '+393286421509', 'Telefono Schema errato')
check(any(c.get('contactType') == 'WhatsApp' and c.get('telephone') == '+393270084357' and c.get('url') == 'https://wa.me/393270084357' for c in schema.get('contactPoint', [])), 'WhatsApp Schema errato')
check(schema.get('checkoutTime') == '10:00' and 'checkinTime' not in schema, 'Orari Schema incoerenti')
check(schema.get('hasMap') == model['site']['maps'] and '/maps/place/La+Dimora+dei+Ricci/' in schema['hasMap'], 'Scheda Google esatta mancante')
check(schema.get('numberOfRooms') == 4, 'Numero camere errato')
check(json.loads(guide.json)['url'] == ORIGIN + GUIDE, 'Schema guida errato')
check('gole-di-tiberio' in guide.ids, 'Gole di Tiberio mancanti dalla guida')
check(len(model['info']) == 12, 'Informazioni utili incomplete')
check(len(model['reviews']) == 4, 'Recensioni preesistenti mancanti')
for lang, bad in [('it', 'Bagno privato'), ('en', 'Private bathroom'), ('de', 'Eigenes Bad')]:
    stay = model['copy'][lang]['stay']
    check(stay['winterIn'].startswith('15:00–22:00'), f'Check-in inverno errato: {lang}')
    check(stay['summerIn'].startswith('15:00–23:00'), f'Check-in estate errato: {lang}')
    check(stay['out'].startswith('10:00'), f'Check-out errato: {lang}')
    for room in model['rooms']:
        check(bad in room['features'][lang] and 'TV' in room['features'][lang], f'Bagno o TV assenti: {room["id"]}/{lang}')
        check(bool(room['gallery']), f'Galleria vuota: {room["id"]}')
        for path in [room['cover'], *room['gallery']]: check(local_file(path).is_file(), f'Foto camera assente: {path}')
    kitchen = next(f for f in model['faqs'] if f['id'] == 'cucina')['answer'][lang]
    check(all(name in kitchen for name in ['Ortensia', 'Tulipano', 'Glicine', 'Papavero']), f'FAQ cucina incompleta: {lang}')
    for faq in model['faqs']: check(bool(faq['answer'].get(lang)), f'Traduzione FAQ assente: {lang}')
source_text = '\n'.join(p.read_text() for p in (ROOT/'src').glob('*.ts*'))
# Crop percentages are image settings, not commercial discounts.
copy_source = re.sub(r"position:\s*'[^']*'", '', source_text)
check(not re.search(r'(?<!\d)(?:10|15)\s*%', copy_source), 'Vecchio sconto nel sorgente')
check(not re.search(r'15:00\s*[–-]\s*21:00|10:00\s*[–-]\s*23:00', source_text), 'Vecchi orari nel sorgente')
check('Cucina comune su richiesta' not in source_text and 'Shared kitchen on request' not in source_text, 'Vecchia regola cucina')
check('I bambini fino a 3 anni soggiornano gratuitamente.' in home_html, 'Gratuità bambini assente')
check(not re.search(r'senza scale|no stairs|ohne Treppen|step-free', source_text, re.I), 'Vecchie dichiarazioni di accesso senza gradini')
check('piccolo gradino' in home_html, 'Gradino ingresso non comunicato')
check('Prenota ora - 8% di sconto' in home_html, 'CTA nuova assente')
check('welcome-slides' in home.ids and 'reviews-track' in home.ids, 'Gallerie assenti')
check('servizi-vicini' in home.ids and 'trasporti' in home.ids, 'Servizi o trasporti assenti')
check('130 km' in home_html, 'Aeroporto assente')
check('https://www.parcodeinebrodi.it/' in home_html, 'Sito ufficiale Nebrodi assente')
check('Posso utilizzare la cucina durante il soggiorno?' in home_html, 'FAQ cucina definitiva assente')
check(home_html.index('id="home"') < home_html.index('id="dimora"') < home_html.index('id="camere"'), 'Ordine sezioni errato')
check('Design by Sergio Todaro' in home_html and 'Design by Sergio Todaro' in routes[GUIDE].read_text(), 'Credit design mancante')
check('WhatsApp: +39 327 008 4357' in ''.join(home.text), 'Numero WhatsApp visibile mancante')
check(sum(t == 'article' and 'benefit-card' in a.get('class', '') for t, a in home.tags) == 3, 'Attesi tre vantaggi editoriali')
check('arrivo-partenza' in home_html and 'dove-mangiare' in home.ids and 'seasons-title' in home.ids, 'Orari, ristorazione o stagioni mancanti')
check('benefits-controls' not in home_html and 'tone-warm' not in home_html and 'tone-cream' not in home_html, 'Vecchio carosello/colori presenti')
check('services-section' not in home_html and 'family-note' not in home_html and 'breakfast-note' not in home_html, 'Blocchi ridondanti reintrodotti')
check(any('/maps/place/Bar+da+Franco' in url for url in external), 'Scheda Maps Bar Da Franco mancante')
for filename in ['muro-ceramiche-belvedere', 'gole-di-tiberio', 'piramide-38-parallelo', 'agora-halaesa-arconidea', 'finestra-sul-mare-villa-margi']:
    check(any(t == 'img' and a.get('src', '').endswith(filename + '.webp') for t, a in home.tags), 'Nuova foto assente: ' + filename)
check({'it', 'en', 'de'} <= set(pages['/termini.html'].ids), 'Traduzioni Termini mancanti')
check((DIST/'privacy.html').read_bytes() == (ROOT/'public/privacy.html').read_bytes(), 'Privacy alterata')
urls = {el.text for el in ET.parse(DIST/'sitemap.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
check({ORIGIN + route for route in routes if route != GUIDE} <= urls and ORIGIN + GUIDE not in urls, 'Sitemap non coerente con la guida sospesa')
check(guide.meta('robots') == 'noindex,follow', 'Guida sospesa indicizzabile')
check(not any(t == 'a' and a.get('href', '').startswith(GUIDE) for t, a in home.tags), 'Link alla guida ancora nella homepage')
check('Sitemap: '+ORIGIN+'/sitemap.xml' in (DIST/'robots.txt').read_text(), 'Robots incoerente')
check((DIST/'guida-santo-stefano-di-camastra.pdf').read_bytes().startswith(b'%PDF-'), 'PDF assente o non valido')

# Current commercial terms and new owner-supplied image selection.
check(home_html.index('id="camere"') < home_html.index('id="cucina"') < home_html.index('id="informazioni-utili"'), 'Cucina non subito dopo le camere')
check('id="cucina-comune"' not in home_html, 'Cucina duplicata nelle informazioni pratiche')
for lang in ['it', 'en', 'de']:
    direct = next(f for f in model['faqs'] if f['id'] == 'diretta')['answer'][lang]
    check('8%' in direct and '10%' not in direct, f'Sconto FAQ incoerente: {lang}')
check('ammessi gratis su richiesta' in model['benefits'][2]['text']['it'], 'Gratuità animali assente')
articles = re.findall(r'<article[^>]*class="benefit-card[^>]*>(.*?)</article>', home_html, re.S)
for article, benefit in zip(articles, model['benefits']):
    paragraph = re.search(r'<p>(.*?)</p>', article, re.S)
    check(paragraph is not None and ''.join(Page(paragraph[1]).text) == benefit['text']['it'], 'Copy card o link inline alterato')
check(sum(t == 'ol' and 'destination-list' in a.get('class', '').split() for t, a in home.tags) == 1, 'Territorio non in un unico elenco')
check('more-destinations' not in home_html, 'Secondo gruppo destinazioni presente')
list_html = re.search(r'<ol class="destination-list destination-editorial">(.*?)</ol>', home_html, re.S)
check(list_html is not None and list_html[1].count('<h3>') == len(model['destinations']) == 7, 'Destinazioni mancanti dall’elenco uniforme')
check('class="route-note"' not in home_html and 'class="guide-promo"' not in home_html, 'Nota o promozione guida ancora presenti')
check('location-finale' in home_html and 'class="final-cta"' not in home_html, 'Chiusura non unificata')
check(sum(t == 'section' and a.get('id') == 'dove-siamo' for t, a in home.tags) == 1, 'Posizione duplicata')
check('kitchen-slides' in home.ids, 'Slider cucina assente')
selection = json.loads((ROOT/'scripts/image-selection-2026-10-05.json').read_text()) + json.loads((ROOT/'scripts/image-selection-2026-10-05-seguito.json').read_text())
metadata = json.loads((ROOT/'src/image-variants.json').read_text())
for asset in selection:
    path = asset['output']
    check(local_file(path).is_file() and path in metadata, f'Asset selezionato o metadati assenti: {path}')
    check(path in source_text, f'Asset selezionato non utilizzato: {path}')
check(not any(t == 'img' and a.get('src', '').lower().endswith('.heic') for page in pages.values() for t, a in page.tags), 'HEIC servito al browser')
original_manifest = ROOT/'scripts/original-assets-2026-10-05.json'
if (ROOT/'originals').is_dir():
    for original in json.loads(original_manifest.read_text()):
        file = ROOT/original['file']
        check(file.exists() and hashlib.sha256(file.read_bytes()).hexdigest() == original['sha256'], f'Originale fornito alterato: {file.name}')
else:
    warnings.append('Archivio fotografico locale non incluso nel checkout: confronto degli originali non eseguibile.')

baseline_path = ROOT/'audit/inventario-iniziale.json'
preserved = None
if baseline_path.exists():
    baseline = json.loads(baseline_path.read_text())
    preserved = all((ROOT/r['file']).is_file() and hashlib.sha256((ROOT/r['file']).read_bytes()).hexdigest() == r['sha256'] for r in baseline['assets'])
    check(preserved, 'Asset originali modificati rispetto all’inventario storico')
else: warnings.append('Inventario storico non disponibile: confronto storico degli asset non eseguibile.')
backup = ROOT.parent/'la-dimora-backup-prima-2026-09-14.zip'
changed = None
if backup.exists():
    with zipfile.ZipFile(backup) as z:
        changed = [n for n in z.namelist() if not n.endswith('/') and (ROOT/n).is_file() and z.read(n) != (ROOT/n).read_bytes()]
else: warnings.append('Backup ZIP storico non disponibile: confronto col backup non eseguibile.')
result = {'errors': errors, 'warnings': warnings, 'routesChecked': list(routes), 'localReferencesChecked': len(refs), 'externalLinks': sorted(external), 'faqCount': len(model['faqs']), 'guideSections': len(model['guide']), 'originalAssetsUnchangedVsHistoricalInventory': preserved, 'changedVsBackup': changed,
          'bundleBytes': [{'file':str(p.relative_to(DIST)), 'raw':p.stat().st_size, 'gzip':len(gzip.compress(p.read_bytes()))} for p in sorted((DIST/'assets').glob('*'))],
          'limits': 'Verifiche statiche. Link esterni, resa visiva e condizioni reali di rete richiedono controlli separati; non è una certificazione WCAG o Core Web Vitals.'}
(ROOT/'audit').mkdir(exist_ok=True)
(ROOT/'audit/verifica-finale.json').write_text(json.dumps(result, indent=2, ensure_ascii=False)+'\n')
print(json.dumps({k:v for k,v in result.items() if k not in ['externalLinks','bundleBytes']}, indent=2, ensure_ascii=False))
raise SystemExit(1 if errors else 0)
