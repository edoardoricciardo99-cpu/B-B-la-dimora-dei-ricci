"""Generate the Italian companion PDF from the same content as the HTML guide.
Run npm run build first, then this script with Python + reportlab, then rebuild.
No photos are fetched or added. Tourist sources are clickable in the PDF.
"""
from pathlib import Path
import json
import subprocess
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
data = json.loads(subprocess.check_output([
    'node', '--input-type=module', '-e',
    "const m = await import('./.prerender/prerender.js'); console.log(JSON.stringify({sections:m.guideSections, copy:m.guideCopy.it, site:m.site, path:m.guidePath}));"
], cwd=ROOT, text=True))
output = ROOT / 'public/guida-santo-stefano-di-camastra.pdf'
ink, wine, muted = map(colors.HexColor, ['#261c19', '#702b32', '#695c55'])
styles = {
    'eyebrow': ParagraphStyle('eyebrow', fontName='Helvetica-Bold', fontSize=9, leading=14, textColor=wine, spaceAfter=12),
    'title': ParagraphStyle('title', fontName='Times-Roman', fontSize=35, leading=38, textColor=wine, spaceAfter=24),
    'h2': ParagraphStyle('h2', fontName='Times-Roman', fontSize=23, leading=27, textColor=wine, spaceAfter=14, keepWithNext=True),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=10.5, leading=16, textColor=ink, spaceAfter=12, alignment=TA_LEFT),
    'small': ParagraphStyle('small', fontName='Helvetica', fontSize=9, leading=13, textColor=muted, spaceAfter=10),
    'source': ParagraphStyle('source', fontName='Helvetica', fontSize=9, leading=13, textColor=wine, spaceAfter=22),
}
def clean(value):
    return escape(value.replace('–', '-').replace('—', '-').replace('‑', '-'))
def para(value, style='body'):
    return Paragraph(clean(value), styles[style])
def link(url, label):
    return Paragraph(f'<link href="{escape(url, {chr(34): "&quot;"})}" color="#702b32"><u>{clean(label)}</u></link>', styles['source'])
def decorate(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(wine)
    canvas.rect(0, A4[1]-12, A4[0], 12, fill=1, stroke=0)
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(muted)
    canvas.drawString(48, 30, 'LA DIMORA DEI RICCI  |  GUIDA AL TERRITORIO  |  OTTOBRE 2026')
    canvas.drawRightString(A4[0]-48, 30, str(doc.page))
    canvas.restoreState()

story = [Spacer(1, 35), para('LA DIMORA DEI RICCI / SICILIA', 'eyebrow'),
         para(data['copy']['title'], 'title'), para(data['copy']['intro']), Spacer(1, 18),
         para('La guida da portare con te', 'h2'), para(data['copy']['updated'], 'small'),
         link(data['site']['url'] + data['path'], 'Apri la guida online e consulta gli aggiornamenti'),
         Spacer(1, 12), para('Il tuo soggiorno', 'h2'),
         para('Quattro camere nel centro storico, tutte con bagno privato e colazione inclusa. Cucina condivisa disponibile per tutti gli ospiti. Prenotazione diretta: -8%.'),
         para('Check-in: estate 15:00-23:00, inverno 15:00-22:00. Check-out entro le 10:00 tutto l’anno. I bambini fino a 3 anni soggiornano gratuitamente. Animali ammessi gratis su richiesta.'),
         para('Glicine e Papavero sono al piano terra, con un piccolo gradino all’ingresso. Per esigenze di mobilità, contattaci prima di prenotare.'),
         para('Via Brofferio 12, Santo Stefano di Camastra (ME). Chiamate: +39 328 642 1509. WhatsApp: +39 327 008 4357. Email: ladimoradeiricci@gmail.com.', 'small'),
         link('https://wa.me/' + data['site']['whatsappPhone'], 'Prenota ora - 8% di sconto'), PageBreak()]
# Two related topics per page keep the downloadable guide compact and readable.
for i, section in enumerate(data['sections']):
    if i and i % 2 == 0: story.append(PageBreak())
    story += [para(f'{i+1:02d} / SCOPRIRE IL TERRITORIO', 'eyebrow'), para(section['title']['it'], 'h2')]
    story += [para(p) for p in section['paragraphs']['it']]
    story += [link(section['url'], 'Informazioni e fonte: ' + section['sourceLabel'])]
story += [Spacer(1, 10), link(data['site']['url'] + '/#informazioni-utili', 'Parcheggio, colazione e informazioni utili per il soggiorno'), link('https://comune.santostefanodicamastra.me.it/', 'Avvisi e contatti del Comune')]
SimpleDocTemplate(str(output), pagesize=A4, rightMargin=48, leftMargin=48, topMargin=44, bottomMargin=52,
                  title=data['copy']['title'], author=data['site']['name'], subject='Guida gratuita al territorio').build(story, onFirstPage=decorate, onLaterPages=decorate)
print(output)
