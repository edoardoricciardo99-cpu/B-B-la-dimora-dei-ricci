# Revisione del 30 settembre 2026

## Stato e ambito

Repository `B-B-la-dimora-dei-ricci`, remote `edoardoricciardo99-cpu/B-B-la-dimora-dei-ricci`, branch **dimora_ricci_0.2** prima e dopo. Le modifiche locali delle revisioni 27–29 settembre erano già presenti e sono state conservate. Nessun commit, push, merge, deploy o cambio di branch.

La revisione è implementata e verificata in locale. Restano da completare la prova touch/riduzione movimento su dispositivi reali e l’ottimizzazione dell’LCP mobile: non sono risultati certificati da questa sessione.

Stato Git [iniziale](audit/revisione-4/git-status-iniziale.txt) e [finale](audit/revisione-4/git-status-finale.txt). Il [diff di questa revisione](audit/revisione-4/revisione.diff) distingue il lavoro nuovo dalle modifiche precedenti. Gli output dist/ e .prerender/ sono stati rigenerati dalla build, mai modificati a mano. image-variants.json è identico all’inizio di questa revisione.

## Design, copy e comportamento mobile

- Hero con una sola fotografia reale della facciata, testo sovrapposto a tutti i breakpoint, crop differenziati, gradiente localizzato e bordi rettilinei. Paragrafo più breve, tre vantaggi sempre disponibili.
- CTA principale centralizzata: **Prenota ora - 8% sconto**. Numero WhatsApp 327; chiamate 328. CTA fissa su mobile con spazio riservato e safe area, anche nella guida. Header desktop con la stessa CTA.
- Titolo e paragrafo approvati “Il tuo punto d’appoggio…” conservati. Nuovo slider con quattro fotografie reali esistenti, crossfade, rotazione ogni 7,5 secondi, frecce, indicatori, pausa e tastiera. Rotazione sospesa con focus, interazione, hover e pagina nascosta; autoplay disattivato con reduced motion.
- Nove card sostituite da **tre card editoriali**: neutra, bordeaux e crema. Copy abbreviato, niente sillabazione, Bar Da Franco su una riga. Una colonna sotto 900 px, tre da 900 px. A 320 px la pausa dello slider passa sulla seconda riga: tutti i controlli restano da 44 px.
- Camere: titolo sopra il testo, bagni privati chiari, modali conservate. Glicine e Papavero ora indicano il **piccolo gradino all’ingresso**, anche in EN/DE e FAQ. Rimosso il blocco orari duplicato prima delle camere.
- Informazioni pratiche riunite in sei accordion: arrivo, parcheggio/bici, colazione/cucina, trasporti, servizi vicini, ristorazione. Cucina con icona pentola, ristorazione con posate. Chi Ciauru e i collegamenti Maps verificati conservati.
- Territorio con otto gruppi di mete e distanze indicative; maggiore evidenza alle Gole di Tiberio. Le tre foto del proprietario restano usate: fontana e muro nelle ceramiche, Villa Italia nella posizione.
- Stagioni dentro la sezione territorio: H3, intro, H4. Accordion mobile e griglia 2×2 desktop. Eventi senza date future inventate o ricorrenze annuali non documentate.
- Quattro recensioni originali invariate: una più un’anticipazione della successiva su mobile, due da 600 px, senza autoplay. Otto FAQ in homepage e cinque approfondimenti nella guida.
- Posizione con fotografia e card contatti sovrapposta. Footer con Sergio Todaro; CIR/CIN anche nel footer della guida.

## Accessibilità, performance e SEO

Reveal di 22 px/500 ms, piccoli ritardi progressivi, hover e feedback discreti. Parallax su transform con requestAnimationFrame e listener passivo: misurati **64 px dopo 480 px di scroll desktop**, **32 px dopo circa 338 px mobile**. Reduced motion previsto in CSS/JS: nessun autoplay, parallax e reveal non essenziali disattivati. La verifica dell’impostazione su un sistema operativo reale rimane da fare.

Nessuna dipendenza aggiunta al progetto. Lighthouse è stato eseguito temporaneamente da una cache in /tmp. Hero eager con fetchpriority high, srcset/sizes e dimensioni; foto successive lazy. Aspect ratio dello slider stabile. Logo WebP lossless aggiunto dalla pipeline (circa 64 KB contro 82 KB del PNG), senza alterare l’originale. Tutti gli asset immagine preesistenti risultano invariati dal confronto SHA-256 con l’inizio della revisione.

Title, description, OG e canonical italiani preservati. Homepage, guida e pagine legali nella sitemap; robots consente la scansione. Un H1 in homepage/guida; la privacy preesistente conserva i tre H1 delle sezioni linguistiche. Lingue gestite nello stesso URL: nessun hreflang fittizio e nessun redirect automatico. HTML prerenderizzato e link reali. NAP, CIR e CIN coerenti. Schema BedAndBreakfast con chiamate e WhatsApp distinti, senza AggregateRating.

La guida HTML resta indicizzabile e principale; il PDF italiano è un supporto. PDF rigenerato dagli stessi contenuti, nove pagine renderizzate e controllate, download provato dal browser.

## Dati e fonti

Distanze controllate il 29–30 settembre 2026 da Via Brofferio 12. [Evidenze dei percorsi Maps](audit/revisione-4/percorsi-maps.json), con URL, valori originali e note. In pagina sono arrotondate e indicate come stime; il traffico e l’accesso finale possono cambiare.

| Meta | Distanza pubblicata | Tempo indicativo |
|---|---:|---:|
| Palazzo Trabia | 190 m | 3 min a piedi |
| Gole di Tiberio, percorso SS113/SP52 | 29 km | 40 min in auto |
| Piramide del 38° Parallelo | 11 km | 18 min in auto |
| Labirinto di Arianna | 31 km | 45 min in auto |
| Caronia borgo, territorio dei Nebrodi | 14 km | 21 min in auto |
| Mistretta borgo | 18 km | 21 min in auto |
| Halaesa Arconidea | 14 km | 20 min in auto |
| Spiaggia di Villa Margi | 4 km | 8 min in auto |
| Santuario del Letto Santo | 12 km | 22 min in auto |

Le distanze a Caronia/Mistretta non sono distanze ai sentieri o alle cascate. Maps segnala limitazioni nell’ultimo tratto di Halaesa: consultare il sito archeologico per ingresso e accesso, senza interpretare la stima come garanzia di arrivo in auto all’ingresso.

Servizi a piedi: Chiesa Madre circa 80 m/1 min; stazione 400 m/7 min **dalla Dimora in discesa**, con ritorno in salita; farmacia 90 m/1 min; UniCredit ATM 280 m/4 min; Decò 750 m/15 min; Chi Ciauru circa 20 m/1 min. Le fonti principali:

- [Comune: Farmacia Mangano](https://santostefanodicamastra.comune.digital/numeri-utili/i/8780594/farmacia-mangano-dott-letterio), [Chiesa San Nicolò](https://santostefanodicamastra.comune.digital/visit-santo-stefano/c/0/i/8780855/chiesa-san-nicolo-di-bari), [Letto Santo](https://santostefanodicamastra.comune.digital/visit-santo-stefano/c/0/i/8780876/santuario-letto-santo).
- [UniCredit: sedi in paese](https://www.unicredit.it/it/contatti-e-agenzie/lista-agenzie/me/santo-stefano-di-camastra.html), [Gruppo VéGé: punti vendita](https://www.gruppovege.it/it/punti-vendita/location/sicilia/messina/santo-stefano-di-camastra); indirizzi e percorsi confrontati con Maps.
- [Trenitalia: orario regionale Sicilia/Calabria](https://www.trenitalia.com/content/dam/trenitalia/allegati/info/orario-digitale/orari-regionali/Regionale_Calabria_Sicilia.pdf), [Interbus: città servite](https://www.interbus.it/citta/), [Aeroporto Palermo: stazione sotto il terminal](https://www.aeroportodipalermo.it/in-aeroporto/raggiungi-aeroporto/treno/). Pubblicati link agli operatori, non orari o prezzi. Circa 130 km dall’aeroporto: dato del proprietario mantenuto, nessun tempo di percorrenza aggiunto.
- [Parco dei Nebrodi: Caronia](https://www.parcodeinebrodi.it/comuni_dettaglio.php?id=83011), [Fondazione Antonio Presti](https://www.fondazioneantoniopresti.org/progetto/fiumara-darte/), [Museo della Ceramica](https://www.museodellaceramica.com/), [operatore Gole di Tiberio](https://goleditiberio.com/escursione-in-gommone-alle-gole-di-tiberio-informazione-prezzi-e-prenotazione/).
- [Buongiorno Ceramica: ordinanza comunale 2026](https://comune-santo-stefano.cdn-immedia.net/wp-content/uploads/2026/05/MV_ORD_014_150526_0000000000.pdf), [Granfondo della Ceramica](https://granfondodellaceramica.com/), [Oktoberfest Stefanese: organizzatori](https://www.facebook.com/oktoberfeststefanese), [riscontro dell’edizione 2026](https://www.lasicilia.it/evento/eventi/3077275/oktoberfest-stefanese-birra-street-food-e-musica-dal-1-al-4-ottobre-a-santo-stefano-di-camastra.html), [avvisi/eventi del Comune](https://santostefanodicamastra.comune.digital/news). Nessuna promessa di manifestazione durante il soggiorno.
- Scheda Google della Dimora ricontrollata il 30 settembre: **4,9**. Link esatto invariato; nessun numero totale di recensioni aggiunto. Bar Da Franco e Chi Ciauru mantengono le schede specifiche già verificate.
- Criteri editoriali: [Google Search Central, contenuti utili](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) e [link scansionabili](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).

**Dati non pubblicati perché insufficientemente verificati:** autobus urbano stazione–B&B (fermate, tariffe, orari), navette, taxi/NCC, tabacchi/lavanderia, modalità di visita del Mulino di Caronia, sede/fruibilità della palestra all’aperto, nuove mostre/eventi natalizi o ricorrenza di passaggi di auto storiche. Nessun dettaglio ipotizzato per riempire queste voci.

## Verifiche

| Verifica | Esito |
|---|---|
| npm run typecheck | PASS |
| npm run lint | PASS |
| npm run build | PASS |
| python3 scripts/verify-site.py | PASS, zero errori |
| git diff --check | PASS |
| Link/asset locali | 53 riferimenti controllati su quattro percorsi |
| Sconto, orari, contatti, gradino | Coerenti; nessun 15%, vecchio orario o “senza scale” nelle sorgenti pubblicate |
| Foto originali, recensioni, Maps | Preservati; confronto con stato iniziale effettuato |

Lo script segnala due avvisi preesistenti: inventario storico e ZIP di backup non disponibili. Il confronto degli asset con lo snapshot creato all’inizio di questa revisione è invece riuscito: nessun asset precedente alterato.

Lighthouse mobile, eseguito sulla build locale: **performance 92, accessibilità 100, best practices 100, SEO 100; LCP 3,3 s, CLS 0, TBT 0 ms**. [Report HTML](audit/revisione-4/lighthouse-mobile-finale.report.html) e [JSON](audit/revisione-4/lighthouse-mobile-finale.report.json). Il primo passaggio era 90/LCP 3,6 s. **LCP ancora sopra 2,5 s**. TBT non è INP; nessuna misura del 75° percentile sul traffico reale e nessuna certificazione WCAG derivano da questo test. Audit console Lighthouse senza errori; la sessione Chrome con estensione mostrava soltanto precedenti messaggi del canale asincrono dell’estensione, non nuovi errori applicativi.

Controllo visivo su 320, 360, 375, 390, 393, 430, 600, 768, 1024, 1280 e 1536 px; anche orientamento 844×390. Screenshot in [audit/revisione-4](audit/revisione-4). Hero senza radius, vantaggi presenti, nessun overflow involontario rilevato. Controlli slider a 320 px misurati interamente dentro 16–304 px, tutti larghi 44 px. Card mobile a colonna e desktop a tre, foto interne arrotondate, FAQ e stagioni leggibili. Footer a 390 px: credito terminava a 728 px, CTA iniziava a 771 px, senza sovrapposizione.

Provati menu, Escape, IT/EN/DE anche nella guida, slider con pulsanti/frecce tastiera e autoplay (da foto 1 a foto 4 in 26 secondi), pausa, accordion via click/Enter, recensioni via tastiera, link guida→camere, download PDF. Tutte le modali raggiungono il fondo e la CTA: scrollTop 427 px per Glicine/Papavero, circa 382 px per Tulipano/Ortensia; chiusura sempre disponibile e focus ripristinato. Dettagli in [modali.json](audit/revisione-4/modali.json) e [parallax.json](audit/revisione-4/parallax.json).

**Da verificare su un dispositivo reale:** gesto swipe touch (slider e recensioni), Safari/iOS, safe area/notch, impostazione di sistema reduced motion e navigazione con screen reader. I comportamenti sono implementati; non viene dichiarato un test fisico che non è stato eseguito.

## File di questa revisione

La lista seguente riguarda il lavoro del 30 settembre; git status include anche il lavoro non committato precedente.

- `src/App.tsx`
- `src/FeatureIcon.tsx`
- `src/GuestInformation.tsx`
- `src/GuidePage.tsx`
- `src/ReviewsCarousel.tsx`
- `src/SeasonsSection.tsx`
- `src/TravelEstimates.tsx`
- `src/WelcomeGallery.tsx`
- `src/content.ts`
- `src/guest-info.ts`
- `src/guide-content.ts`
- `src/index.css`
- `src/local-info.ts`
- `src/site-settings.ts`
- `src/travel-routes.ts`
- `src/visit-content.ts`
- `scripts/build.mjs`
- `scripts/generate-guide-pdf.py`
- `scripts/prepare-images.py`
- `scripts/verify-site.py`

Altri risultati: `public/images/brand/logo-la-dimora-dei-ricci.webp`, `public/guida-santo-stefano-di-camastra.pdf`, questo report e prove in `audit/revisione-4/`. Nessuna modifica a package.json/package-lock.json. Le nuove foto del territorio erano già state importate nella revisione precedente e non sono state ricomprese né sostituite.

## Prima di commit/PR

1. Dare priorità al caricamento della hero su rete mobile: valutare un derivato con crop dedicato mantenendo qualità e fotografia originale, poi misurare nuovamente. Obiettivo LCP 2,5 s non ancora raggiunto nel test simulato.
2. Eseguire il breve giro su iPhone/Android con swipe, reduced motion, orientamento e modali; validare visivamente con il proprietario il crop e i tre testi editoriali.
3. Rivedere il diff cumulativo prima di selezionare i file per il commit: contiene più revisioni. Nessuna pubblicazione è stata effettuata.
