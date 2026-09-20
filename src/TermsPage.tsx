import { site } from './site-settings';
import { languages, type Language } from './content';
import { guestCopy } from './guest-info';

const sections: Record<Language, { intro: string; updated: string; contact: string; privacy: string; back: string; items: [string, string][] }> = {
  it: {
    intro: 'Questa pagina riguarda l’utilizzo del sito informativo della Dimora dei Ricci. Le condizioni del soggiorno vengono comunicate dalla struttura prima della conferma della prenotazione.',
    updated: 'Ultimo aggiornamento: 19 settembre 2026', contact: 'Struttura e contatti', privacy: 'Privacy e cookie', back: 'Torna al sito',
    items: [
      ['Finalità e utilizzo del sito', 'Il sito presenta il Bed & Breakfast La Dimora dei Ricci, le camere, i servizi e alcune proposte per visitare il territorio. La consultazione è libera. Non sono presenti un sistema di acquisto online né pagamenti sul sito. Utilizza i contatti per richieste pertinenti al soggiorno, senza inviare contenuti illeciti o compromettere il funzionamento del sito.'],
      ['Disponibilità e richieste di prenotazione', 'I pulsanti di contatto, anche tramite WhatsApp, consentono di inviare una richiesta: il solo invio del messaggio non costituisce una prenotazione confermata. Disponibilità, prezzo complessivo, servizi inclusi ed eventuali condizioni applicabili vengono comunicati dalla struttura per le date e gli ospiti indicati, prima della conferma.'],
      ['Tariffe e condizioni del soggiorno', 'Le tariffe dipendono dal periodo e dalla sistemazione richiesta. Anche le promozioni riportate sul sito vengono precisate nel preventivo. Per cancellazioni, eventuali anticipi, pagamenti o rimborsi, fai riferimento alle condizioni effettivamente comunicate e accettate in fase di prenotazione: questa pagina non introduce penali o regole ulteriori. Restano fermi i diritti previsti dalla normativa applicabile.'],
      ['WhatsApp e servizi esterni', 'Aprendo un collegamento esterno si lascia questo sito. WhatsApp, Google Maps, Booking.com, Airbnb, youMove e gli altri fornitori applicano le proprie condizioni e informative. Eventuali prenotazioni effettuate su piattaforme esterne seguono le condizioni mostrate nel relativo percorso di prenotazione. I collegamenti non implicano una partnership commerciale con la Dimora.'],
      ['Informazioni sul territorio e servizi di terzi', 'Ristoranti, parcheggi pubblici, trasporti, eventi ed escursioni sono gestiti da soggetti indipendenti. Orari, accessi, tariffe e disponibilità possono variare: verifica direttamente con il gestore prima di spostarti o acquistare. Le indicazioni sul sito aiutano a organizzare il soggiorno e non sostituiscono gli avvisi ufficiali o la segnaletica. Segnalaci eventuali informazioni da correggere.'],
      ['Contenuti e diritti', 'Testi, fotografie, marchi e altri contenuti appartengono ai rispettivi titolari o sono utilizzati secondo le licenze applicabili. Le immagini di terzi riportano, ove previsto, autore, fonte e licenza. Per riutilizzare i contenuti occorre rispettare tali diritti e le eventuali licenze; la sola consultazione non concede un’autorizzazione generale al riuso.'],
      ['Aggiornamenti', 'Queste informazioni possono essere aggiornate per riflettere modifiche del sito o dei servizi. La data di aggiornamento è indicata in questa pagina. Gli aggiornamenti non modificano automaticamente le condizioni di una prenotazione già confermata.'],
    ],
  },
  en: {
    intro: 'This page concerns use of La Dimora dei Ricci’s information website. The property provides the terms of your stay before a booking is confirmed.',
    updated: 'Last updated: 19 September 2026', contact: 'Property and contact details', privacy: 'Privacy and cookies', back: 'Back to the website',
    items: [
      ['Purpose and use of the website', 'The website presents La Dimora dei Ricci Bed & Breakfast, its rooms and services, and suggestions for exploring the area. Browsing is free. There is no online purchasing or payment system on this website. Use the contact details for relevant enquiries; do not send unlawful content or interfere with the website.'],
      ['Availability and booking enquiries', 'Contact buttons, including WhatsApp links, allow you to send an enquiry. Sending a message alone does not confirm a booking. The property will confirm availability, the total price, included services and any applicable terms for your dates and party before your booking is confirmed.'],
      ['Rates and terms of the stay', 'Rates depend on dates and accommodation. Promotions shown on the website are also clarified in the quotation. For cancellations, any deposits, payments or refunds, refer to the terms actually provided and accepted during booking. This page introduces no additional penalties or rules. Your rights under applicable law remain unaffected.'],
      ['WhatsApp and external services', 'Following an external link takes you away from this website. WhatsApp, Google Maps, Booking.com, Airbnb, youMove and other providers have their own terms and privacy notices. Bookings made on external platforms follow the conditions displayed during the relevant booking process. Links do not imply a commercial partnership with La Dimora.'],
      ['Local information and third-party services', 'Restaurants, public parking, transport, events and excursions are independently operated. Opening times, access, prices and availability may change: check directly with the provider before travelling or purchasing. Website information helps plan your stay but does not replace official notices or signs. Please tell us about information that needs correcting.'],
      ['Content and rights', 'Text, photographs, brands and other content belong to their respective rights holders or are used under applicable licences. Third-party images show credits, sources and licences where required. Any reuse must respect those rights and licences; browsing does not grant general permission to reuse content.'],
      ['Updates', 'This information may be updated to reflect changes to the website or services. The revision date appears on this page. Updates do not automatically change the terms of an already confirmed booking.'],
    ],
  },
  de: {
    intro: 'Diese Seite betrifft die Nutzung der Informationswebsite von La Dimora dei Ricci. Die Bedingungen Ihres Aufenthalts werden Ihnen von der Unterkunft vor der Buchungsbestätigung mitgeteilt.',
    updated: 'Letzte Aktualisierung: 19. September 2026', contact: 'Unterkunft und Kontakt', privacy: 'Datenschutz und Cookies', back: 'Zurück zur Website',
    items: [
      ['Zweck und Nutzung der Website', 'Die Website stellt das Bed & Breakfast La Dimora dei Ricci, seine Zimmer und Leistungen sowie Ausflugsziele vor. Die Nutzung ist kostenlos. Auf dieser Website gibt es kein Online-Kauf- oder Zahlungssystem. Nutzen Sie die Kontakte für Anfragen zum Aufenthalt; versenden Sie keine rechtswidrigen Inhalte und beeinträchtigen Sie nicht den Betrieb der Website.'],
      ['Verfügbarkeit und Buchungsanfragen', 'Über die Kontaktbuttons, einschließlich WhatsApp, können Sie eine Anfrage senden. Allein das Versenden einer Nachricht stellt keine bestätigte Buchung dar. Die Unterkunft teilt Verfügbarkeit, Gesamtpreis, enthaltene Leistungen und geltende Bedingungen für Ihre Reisedaten und Gästezahl vor der Buchungsbestätigung mit.'],
      ['Preise und Aufenthaltsbedingungen', 'Die Preise hängen vom Zeitraum und vom gewünschten Zimmer ab. Auch beworbene Angebote werden im konkreten Angebot erläutert. Für Stornierungen, mögliche Anzahlungen, Zahlungen oder Erstattungen gelten die bei der Buchung tatsächlich mitgeteilten und vereinbarten Bedingungen. Diese Seite führt keine zusätzlichen Gebühren oder Regeln ein. Gesetzliche Rechte bleiben unberührt.'],
      ['WhatsApp und externe Dienste', 'Externe Links führen zu anderen Websites. WhatsApp, Google Maps, Booking.com, Airbnb, youMove und andere Anbieter haben eigene Bedingungen und Datenschutzhinweise. Für Buchungen über externe Plattformen gelten die im jeweiligen Buchungsverfahren angezeigten Bedingungen. Ein Link bedeutet keine geschäftliche Partnerschaft mit La Dimora.'],
      ['Ortsinformationen und Leistungen Dritter', 'Restaurants, öffentliche Parkplätze, Verkehrsmittel, Veranstaltungen und Ausflüge werden unabhängig betrieben. Zeiten, Zugang, Preise und Verfügbarkeit können sich ändern. Prüfen Sie diese vor der Fahrt oder dem Kauf beim Anbieter. Die Angaben helfen bei der Reiseplanung, ersetzen aber keine offiziellen Mitteilungen oder Schilder. Bitte melden Sie uns fehlerhafte Informationen.'],
      ['Inhalte und Rechte', 'Texte, Fotos, Marken und andere Inhalte gehören den jeweiligen Rechteinhabern oder werden unter den geltenden Lizenzen verwendet. Bei Bildern Dritter werden, soweit erforderlich, Urheber, Quelle und Lizenz angegeben. Bei einer Weiterverwendung sind diese Rechte und Lizenzen zu beachten; die Nutzung der Website erteilt keine allgemeine Erlaubnis zur Weiterverwendung.'],
      ['Aktualisierungen', 'Diese Informationen können bei Änderungen der Website oder der Angebote aktualisiert werden. Das Aktualisierungsdatum steht auf dieser Seite. Änderungen wirken sich nicht automatisch auf bereits bestätigte Buchungen aus.'],
    ],
  },
};

export default function TermsPage() {
  return <html lang="it"><head>
    <meta charSet="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Termini e Condizioni | La Dimora dei Ricci</title>
    <meta name="description" content="Termini di utilizzo del sito del B&B La Dimora dei Ricci: contatti, richieste di prenotazione, servizi esterni e contenuti." />
    <link rel="canonical" href={`${site.url}/termini.html`} /><link rel="icon" href="/favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="/legal.css" />
  </head><body><a className="skip-link" href="#terms-main">Vai al contenuto</a><main id="terms-main" className="legal-wrap">
    <a className="back" href="/">← La Dimora dei Ricci</a><h1>Termini e Condizioni</h1>
    <nav aria-label="Lingue" className="legal-nav">{languages.map(lang => <a key={lang.code} lang={lang.code} href={`#${lang.code}`}>{lang.name}</a>)}</nav>
    {languages.map(({ code }) => { const t = sections[code]; return <section key={code} id={code} lang={code} className="legal-language" aria-labelledby={`terms-${code}`}>
      <h2 id={`terms-${code}`}>{guestCopy[code].terms}</h2><p className="legal-date">{t.updated}</p><p>{t.intro}</p>
      <h3>{t.contact}</h3><address><strong>{site.name} · Bed & Breakfast</strong><br />Via Brofferio 12, 98077 Santo Stefano di Camastra (ME), Italia<br /><a href={`tel:+${site.phone}`}>{site.phoneLabel}</a><br /><a href={`mailto:${site.email}`}>{site.email}</a></address><p>CIR 19083091C110715 · CIN IT083091C18EYCBOMV<br /><a href={site.url}>{site.url}</a></p>
      {t.items.map(([title, text]) => <section key={title}><h3>{title}</h3><p>{text}</p></section>)}
      <h3>{t.privacy}</h3><p><a href={`/privacy.html#${code}`}>{guestCopy[code].terms === 'Nutzungsbedingungen' ? 'Datenschutzerklärung' : 'Privacy Policy'}</a></p>
      <a className="back" href="/">← {t.back}</a>
    </section>; })}
    <footer><p>Servizi esterni / External services / Externe Dienste</p><ul>{[
      ['WhatsApp', `https://wa.me/${site.whatsappPhone}`], ['Booking.com', 'https://www.booking.com/'], ['Airbnb', 'https://www.airbnb.com/'], ['Google Maps', site.maps], ['youMove', 'https://www.youmove.cloud/'],
    ].map(([name, url]) => <li key={name}><a href={url} target="_blank" rel="noopener noreferrer">{name} ↗</a></li>)}</ul></footer>
  </main></body></html>;
}
