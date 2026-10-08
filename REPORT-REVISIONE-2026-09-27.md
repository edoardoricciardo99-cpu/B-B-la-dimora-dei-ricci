# Revisione del sito — 27 settembre 2026

## Stato e ambito

Repository: `B-B-la-dimora-dei-ricci`, remoto `https://github.com/edoardoricciardo99-cpu/B-B-la-dimora-dei-ricci.git`.
Branch: **dimora_ricci_0.2**, mantenuto su esplicita indicazione del proprietario dopo la verifica iniziale. Il repository era pulito prima dell'intervento.

Modifiche locali pronte per la revisione. Nessun commit, push, merge, deploy o modifica a main. Nessuna nuova dipendenza applicativa e nessuna installazione npm necessaria. Architettura React/Vite/TypeScript conservata. `dist/` e `.prerender/` sono stati prodotti soltanto dalla build; `src/image-variants.json` non è stato modificato.

Anteprima locale: http://127.0.0.1:4177/
Guida: http://127.0.0.1:4177/guida-santo-stefano-di-camastra/

## Modifiche realizzate

- Hero con H1 «La Dimora dei Ricci» leggermente ridotto, eyebrow territoriale, copy sintetico, CTA WhatsApp e camere, sconto diretto -8% e «★ 4,9 su Google». Collegamento alla scheda effettiva della struttura. Nessun conteggio recensioni esposto, AggregateRating o Review aggiunto.
- Parallax esistente riattivato: movimento massimo 24 px, aggiornamento tramite requestAnimationFrame, ascoltatore passivo; disattivato fino a 980 px e con prefers-reduced-motion. Nessuna libreria aggiunta.
- Nuova sezione immediatamente dopo la hero, con titolo e testo richiesti e otto vantaggi con SVG. Griglie responsive a quattro/due/una colonna. Card fotografiche e foto principali uniformate a 20 px senza alterare loghi e icone.
- Camere con bagno privato esplicito, Wi-Fi, climatizzazione e TV; Glicine fino a quattro persone, Papavero fino a due, Tulipano due più un posto aggiungibile, Ortensia fino a tre con terrazzo privato. Glicine e Papavero al piano terra senza scale, senza dichiarazioni di accessibilità certificata.
- Dodici card di informazioni pratiche, FAQ aggiornate e card Chi Ciauru. Contatti chiamate e WhatsApp distinti. Fotografie e recensioni originali conservate.
- Homepage alleggerita nella parte territoriale: quattro anticipazioni con Gole di Tiberio in seconda posizione, link ufficiale Nebrodi e CTA alla guida.
- Pagina HTML prerenderizzata e indicizzabile `/guida-santo-stefano-di-camastra/`, con quindici sezioni, indice, riferimenti alle fonti, lingue IT/EN/DE e CTA commerciali. Nessuna lingua aggiuntiva. Il JavaScript della guida è separato dalla homepage.
- PDF italiano gratuito di nove pagine, generato dagli stessi contenuti della guida e scaricabile dalla CTA. Fonti e contatti cliccabili; nessuna fotografia generica aggiunta.
- Title, description, OG e Twitter aggiornati, canonical corretti, sitemap ampliata, robots verificato e structured data coerente. La pagina italiana rimane la versione prerenderizzata, come nella precedente architettura; EN/DE sono selezionabili nell'interfaccia.

## Dati definitivi applicati

| Voce | Valore |
| --- | --- |
| Prenotazione diretta | -8% |
| Check-in estate | 15:00–23:00 |
| Check-in inverno | 15:00–22:00 |
| Check-out | Entro le 10:00 tutto l'anno |
| Bambini | Fino a 3 anni soggiornano gratuitamente |
| Animali | Ammessi su richiesta |
| Cucina | Condivisa e disponibile per tutti; collegata a Ortensia e Tulipano, chiave dedicata per Glicine e Papavero |
| Chiamate | +39 328 642 1509 |
| WhatsApp | +39 327 008 4357 |
| Email | ladimoradeiricci@gmail.com |
| Palermo aeroporto | Circa 130 km, dato fornito dal proprietario; nessun tempo di percorrenza pubblicato |

Nessuna occorrenza del precedente sconto 15% o dei vecchi intervalli di check-in nei contenuti pubblicati. Le condizioni sono state confrontate fra homepage, modali, FAQ, traduzioni e PDF.

## File modificati e aggiunti

| File | Intervento |
| --- | --- |
| `src/site-settings.ts` | Configurazione hero/parallax, SEO/social, contatti, rating e Maps, dati dell'attività |
| `src/content.ts` | Copy IT/EN/DE, camere, servizi, orari |
| `src/guest-info.ts` | Dodici card pratiche, cucina e bambini condivisi, otto vantaggi, ristorante |
| `src/GuestInformation.tsx` | Layout delle informazioni pratiche e card Chi Ciauru |
| `src/FeatureIcon.tsx` — nuovo | Icone SVG leggere |
| `src/visit-content.ts` | FAQ, anticipo territoriale della homepage, collegamenti |
| `src/App.tsx` | Hero, vantaggi, camere, informazioni, territorio e CTA guida |
| `src/index.css` | Card, raggi fotografici, tipografia hero e responsive |
| `src/guide-content.ts` — nuovo | Testi e fonti della guida nelle tre lingue |
| `src/GuidePage.tsx` — nuovo | Pagina guida, indice, metadata dinamici, PDF |
| `src/guide.css` — nuovo | Stili responsive della guida |
| `src/main.tsx` | Selezione della pagina guida tramite URL |
| `src/prerender.tsx` | Esportazioni per generare e verificare la guida |
| `scripts/build.mjs` | HTML statico guida, metadati, CSS della pagina, sitemap |
| `vite.config.ts` | Manifest per includere il CSS della guida già nell'HTML |
| `index.html` | Metadati di fallback aggiornati |
| `public/sitemap.xml` | Homepage, guida, privacy e termini |
| `public/guida-santo-stefano-di-camastra.pdf` — nuovo | Guida italiana scaricabile |
| `scripts/generate-guide-pdf.py` — nuovo | Generazione ripetibile del PDF con ReportLab |
| `scripts/verify-site.py` | Verifica statica compatibile con il repository corrente e le nuove pagine |
| `GUIDA-MODIFICHE.md`, `README-SORGENTE.md` | Istruzioni allineate ai nuovi contenuti e controlli |
| `REPORT-REVISIONE-2026-09-27.md` — nuovo | Questo report |
| `audit/*.json` — nuovi | Esiti verifiche, link, conservazione asset, confronto bundle e controlli browser |
| `audit/screenshots/*.png` — nuovi | Evidenze visive homepage e guida su desktop/mobile |

`src/RoomModal.tsx` e `src/image-settings.ts` non richiedevano modifiche: le modali leggono i dati aggiornati e gli alt descrittivi esistenti sono stati mantenuti. Nessun asset in `public/images/` è stato sostituito.

## Fonti consultate

Le informazioni ricettive definitive provengono dal proprietario. Per il territorio sono state usate fonti ufficiali o gestori diretti; orari, tariffe ed eventi variabili vengono rimandati alla fonte per le date di viaggio.

- [Museo della Ceramica / Palazzo Trabia](https://www.museodellaceramica.com/).
- [Guida comunale: Cimitero Vecchio](https://santostefanodicamastra.comune.digital/visit-santo-stefano/c/0/i/8782360/cimitero-vecchio) e [Santuario del Letto Santo](https://santostefanodicamastra.comune.digital/visit-santo-stefano/c/0/i/8780876/santuario-letto-santo).
- [Fondazione Antonio Presti: Fiumara d'Arte](https://www.fondazioneantoniopresti.org/progetto/fiumara-darte/), [Piramide 38° Parallelo](https://www.fondazioneantoniopresti.org/opera/piramide-38-parallelo/), [Labirinto di Arianna](https://www.fondazioneantoniopresti.org/opera/labirinto-di-arianna/).
- [Operatore Gole di Tiberio](https://goleditiberio.com/escursione-in-gommone-alle-gole-di-tiberio-informazione-prezzi-e-prenotazione/).
- [Ente Parco dei Nebrodi](https://www.parcodeinebrodi.it/).
- [Comune di Mistretta: Valle delle Cascate](https://www.comune.mistretta.me.it/Luoghi?ID=424).
- [Regione Siciliana / Parco archeologico di Tindari: Halaesa](https://parchiarcheologici.regione.sicilia.it/tindari/siti-archeologici/area-archeologica-halaesa-arconidea-e-antiquarium-tusa/).
- [Organizzatori Gran Fondo della Ceramica](https://granfondodellaceramica.com/regolamento-e-programma/), [Comune per avvisi ed eventi](https://comune.santostefanodicamastra.me.it/).
- [Localizzatore ufficiale filiali e ATM Intesa Sanpaolo](https://www.intesasanpaolo.com/it/common/footer/ricerca-filiali.html).
- Scheda Google Maps della Dimora: verificati nome, indirizzo e rating 4,9; URL completo conservato in `src/site-settings.ts`.
- Scheda Google Maps «Pizzeria Chi Ciauru»: verificati nome e Via Leonida 8; URL completo in `src/guest-info.ts`. Nessun dettaglio su menu, orari o servizi aggiunto.

## Dati ancora da confermare

1. **Autobus locale:** fermate, modalità, costi e orari. Non pubblicati; FAQ treno invita a scrivere su WhatsApp.
2. **Palestra all'aperto:** posizione e fruibilità attuale. Nessun indirizzo o condizione d'uso inventato; la guida invita a richiedere informazioni.
3. **Mulino di Caronia:** [AIAMS](https://aiams.eu/mill/mulino-di-caronia/) e [Parco dei Nebrodi](https://www.parcodeinebrodi.it/pun-dettaglio.php?id=2479) identificano il mulino, ma non è stato possibile confermare un'organizzazione attuale della visita. Escluso dalla guida pubblica, come richiesto.
4. **ATM:** non pubblicato un indirizzo specifico non confermato; presente il localizzatore ufficiale. Aperture, accessi turistici e calendario eventi vanno verificati con i gestori per le date del soggiorno.

## Verifiche effettuate

| Controllo | Esito |
| --- | --- |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS, nessun warning |
| `npm run build` | PASS |
| `python3 scripts/verify-site.py` | PASS, zero errori; due confronti storici non disponibili |
| `git diff --check` | PASS |
| Pagine statiche | Homepage, guida, termini e privacy verificate |
| Link e asset interni | 53 riferimenti verificati; nessun riferimento mancante |
| FAQ e guida | 13 FAQ, 15 sezioni guida |
| Contatti, sconto, orari, cucina, bambini | Verificati nei dati e nella build |
| SEO | Title/meta/OG/canonical/sitemap/robots/structured data verificati |
| Immagini e recensioni | 147 file immagine invariati; testi recensioni identici a HEAD |
| Browser | Homepage a 1440, 768, 390 e 320 px; guida desktop e mobile; nessun overflow orizzontale rilevato |
| Interazioni | Menu mobile, selettori lingua, FAQ cucina, galleria camere, navigazione foto, chiusura con Escape e ritorno del focus, indice guida e download PDF verificati |
| Console | Nessun errore o warning rilevato durante le prove |
| PDF | Nove pagine renderizzate e ispezionate; download locale riuscito |
| Link esterni | 24 URL controllati: nessun 404/5xx. Halaesa dà 403 al client automatico ma si apre e mostra i contenuti corretti nel browser; Booking risponde 202 |

Il controllo storico non può confrontare inventario e ZIP di backup assenti nel repository: segnala questa limitazione senza creare dati storici artificiali. Il confronto separato degli asset di questa sessione è in `audit/conservazione-asset.json`. La pagina Privacy preesistente mantiene tre H1, uno per ciascuna lingua; le nuove pagine hanno un solo H1.

## Performance e limiti della verifica

Confronto con la build del commit iniziale: homepage circa **+1,5 KB di JavaScript gzip** e **+0,45 KB di CSS gzip**. La guida aggiunge circa 11,6 KB di JavaScript e 1 KB di CSS gzip soltanto sulla propria pagina. PDF circa 20 KB. Nessuna dipendenza runtime aggiunta, nessuna nuova fotografia caricata.

Sono stati controllati dimensioni dei bundle, immagini, comportamento responsive e implementazione del movimento ridotto. Non sono stati misurati Core Web Vitals reali né eseguita una certificazione completa WCAG; non si attribuiscono punteggi Lighthouse o valori LCP/CLS non misurati. L'esclusione del parallax con prefers-reduced-motion è verificata nel codice; il viewport mobile/tablet mostra offset zero.

## Prima della Pull Request

1. Rivedere homepage, guida e PDF nell'anteprima locale, soprattutto il tono del copy e le informazioni operative fornite dal proprietario.
2. Valutare separatamente l'allineamento del Google Business Profile: durante la consultazione mostrava un dominio differente, il numero WhatsApp e un check-in alle 14:30. Non è stato modificato; il sito segue i dati definitivi ricevuti.
3. Aggiungere Mulino, dettagli autobus o palestra soltanto dopo conferma. Le nuove foto potranno essere gestite successivamente con gli asset del proprietario.

Nessuna Pull Request aperta e nessuna pubblicazione eseguita.
