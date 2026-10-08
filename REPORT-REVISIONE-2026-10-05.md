# Revisione del 5 ottobre 2026 — La Dimora dei Ricci

## 1. Stato e perimetro

Repository: `B-B-la-dimora-dei-ricci`, collegato a `edoardoricciardo99-cpu/B-B-la-dimora-dei-ricci`. Branch verificato prima degli interventi e alla chiusura: **dimora_ricci_0.2**. Il checkout conteneva già modifiche delle revisioni precedenti, che sono state conservate. Nessun commit, push, merge o deploy; nessuna modifica a main.

Questa revisione aggiorna copy commerciale, fotografie, cucina e organizzazione delle informazioni. Hero, configurazione parallax, componenti degli slider, reveal, modal delle camere e sezione stagioni sono stati conservati. Gli output della build e i metadati delle varianti fotografiche sono stati rigenerati dagli script, senza modifiche manuali.

Anteprima locale della build: http://127.0.0.1:4178/.

## 2. Copy e CTA

- Sconto commerciale aggiornato all'**8%** in italiano, inglese e tedesco, comprese CTA, FAQ, metadati homepage/OG, guida HTML e PDF. Le occorrenze numeriche non commerciali, come il check-out alle 10:00, restano corrette.
- CTA italiana principale: **Prenota ora - 8% di sconto**; la formulazione completa entra anche a 360 px.
- Le tre card contengono esattamente il copy italiano approvato nell'ultima richiesta. Nella seconda card, “Bar Da Franco” resta parte della frase ed è collegato alla scheda Maps già verificata.
- La terza card e le informazioni pertinenti dichiarano gli animali **ammessi gratis su richiesta**. Restano bambini fino a 3 anni gratis, camere Glicine/Papavero al piano terra e terrazzo privato di Ortensia.
- Le card condividono sfondo avorio, testo scuro, icone bordeaux, altezza, padding, tipografia e angoli arrotondati. Nessuna sillabazione automatica; i termini con trattino, come Wi-Fi, rimangono interi.

## 3. Conservazione e selezione degli originali

I tre ZIP sono stati estratti in `originals/revisione-2026-10-05/`, fuori dagli asset pubblicati. Sono conservati **131 file**: 83 fotografie di base e 48 varianti responsive già contenute nel pacchetto camere. Esclusi soltanto i metadati del sistema operativo. Gli originali sono stati verificati mediante SHA-256; nessuno è stato sovrascritto.

Sono state scelte **21 fotografie dai pacchetti**, riutilizzando 12 WebP già presenti nel sito e producendo 9 nuovi asset WebP. Alcuni WebP del pacchetto camere sono identici ai file già pubblicati: sono stati riutilizzati senza ricompressione. La foto del terrazzo di Ortensia, già presente e non compresa in questi ZIP, resta in gallery perché mostra un servizio specifico della camera.

Le fotografie escluse dalla pubblicazione restano disponibili negli originali. I provini di confronto sono nella cartella `audit/revisione-2026-10-05/`.

## 4. Gallery delle quattro camere

I numeri riportati sotto indicano i suffissi dei file WebP nel relativo pacchetto, non numeri attribuiti a fotografie nuove.

| Camera | Ordine della gallery | Scelta |
| --- | --- | --- |
| Glicine — 5 foto | camera 01, camera 02, camera 04, bagno JPEG 2, bagno IMG_8331 | Vista ampia, controcampo e letti a castello; poi bagno completo e doccia. Copertina: camera 01. |
| Papavero — 4 foto | camera 01, camera 02, bagno WhatsApp 19.55.45, bagno JPEG 2 | Due viste della camera e due viste complementari del bagno. Copertina: camera 01. |
| Tulipano — 4 foto | camera 01, camera 04, bagno 04, bagno 01 | Letto e vista inversa con finestra/arredi, bagno completo e doccia. Copertina: camera 01. |
| Ortensia — 4 foto | camera 02, camera 03, bagno 01, terrazza serale esistente | Tutti i posti letto, controcampo, bagno e terrazzo privato. Nuova scelta per la copertina: camera 02. |

Esclusioni dalle foto delle camere:

| Gruppo | File esclusi | Motivazione |
| --- | --- | --- |
| Glicine | camera 06 e 15 | Ripetono rispettivamente letto e letti a castello/TV già rappresentati meglio dalle viste scelte. |
| Papavero | camera 03 e 04; bagno-camera-papavero-05.webp | Viste simili del letto/divano; il bagno 05 mostra soprattutto lavabo e specchio, con meno contesto delle due nuove fotografie. |
| Tulipano | camera 02, 03 e 06 | Controcampo ripetuto, dettaglio degli asciugamani e dettaglio di parete/TV aggiungono poco alla comprensione dello spazio. |
| Ortensia | camera 01, 04 e 06; bagno 05 | La 02 mostra meglio i tre posti letto; dettagli di biancheria/parete e lavabo sono ridondanti. |

Sono state tolte dalle gallery anche alcune vecchie immagini di dettaglio non comprese negli ZIP (chiave/cartello Papavero, dettaglio castello Glicine e ulteriore bagno Tulipano); i relativi asset non sono stati cancellati.

## 5. Bagno Glicine: confronto di tutte le 11 nuove fotografie

Ispezionati entrambi i JPEG e tutti i nove originali HEIC della cartella `glicine/bagno/`, confrontando prospettiva, luce e leggibilità dello spazio. Selezionate **due immagini**, senza aggiungere una terza foto ridondante.

| File originale | Esito | Motivazione |
| --- | --- | --- |
| glicine bagno 2.jpeg | **Selezionata — principale del bagno** | Vista frontale luminosa dall'ingresso: lavabo, sanitari e pavimento rendono comprensibile la disposizione. Buona nitidezza; nessun crop per far sembrare il bagno più grande. |
| IMG_8331.heic | **Selezionata — doccia** | Vista complementare della cabina doccia, più equilibrata delle alternative HEIC e utile a capire questa parte del bagno. |
| glicine bagno 1.jpeg | Esclusa | L'ingresso e il primo piano della camera distraggono; il bagno si legge meno completamente rispetto al JPEG 2. |
| IMG_8325.heic | Esclusa | Vista verticale della doccia simile alle altre, con prospettiva inclinata. |
| IMG_8326.heic | Esclusa | Inquadratura vicina alla 8325, inclinata e senza informazioni aggiuntive. |
| IMG_8327.heic | Esclusa | Porta e camera visibili occupano parte della scena; lavabo parziale e minore chiarezza del bagno. |
| IMG_8328.heic | Esclusa | Ripete la 8327 con gli stessi limiti di composizione. |
| IMG_8329.heic | Esclusa | Doccia e apertura verso la camera, meno bilanciate della 8331. |
| IMG_8330.heic | Esclusa | Quasi duplicata della 8331, con maggior presenza del bordo della camera e composizione meno concentrata sulla doccia. |
| IMG_8332.heic | Esclusa | Inquadratura inclinata; parete e porta predominano senza aggiungere informazioni utili. |
| IMG_8333.heic | Esclusa | Variante inclinata e ridondante rispetto alla 8331. |

La migliore fotografia principale del bagno è **glicine bagno 2.jpeg**: offre la lettura più chiara dell'insieme. IMG_8331 è il complemento per la zona doccia, non una sostituzione della vista generale.

Le vecchie foto bagno Glicine 01 (doccia più ravvicinata) e 05 (lavabo) restano negli asset, ma non sono nella gallery: pur avendo dettagli nitidi, offrono meno contesto della nuova coppia. Non sono stati modificati artificialmente gli spazi o le proporzioni.

Output nuovi: `bagno-glicine-vista-completa.webp` e `bagno-glicine-doccia.webp`, con varianti 480/960 e alt descrittivi. Nel modal sono mostrate intere, anche a 360 px.

## 6. Bagno Papavero

- **WhatsApp Image 2026-09-26 at 19.55.45.jpeg** → `bagno-papavero-doccia-e-lavabo.webp`: vista con doccia e lavabo.
- **bagno papavero 2.jpeg** → `bagno-papavero-vista-completa.webp`: controcampo con sanitari, complementare alla prima.

Il bagno 05 WebP è stato escluso dalla gallery perché mostra soprattutto lavabo/specchio. La coppia scelta rappresenta più chiaramente il bagno senza duplicare lo stesso punto di vista. Entrambe le foto sono state controllate nel modal mobile e vengono mostrate intere.

## 7. Cucina comune

Nuova sezione autonoma **immediatamente dopo le camere**, intitolata “Uno spazio in più, anche lontano da casa”. Copy italiano richiesto e spiegazione dell'accesso mantenuta: Ortensia/Tulipano direttamente collegate; Glicine/Papavero tramite chiave dedicata. Versioni EN/DE coerenti.

Desktop: testo a sinistra, fotografia ampia a destra e dettaglio più piccolo sotto, allineato a destra. Mobile/tablet stretti: testo sopra, entrambe le fotografie sotto. Si conservano le proporzioni native e gli angoli da 20 px.

Fotografie scelte da `cucina comune.zip`:

| File | Uso | Motivazione |
| --- | --- | --- |
| 030.jpg | Vista ampia della cucina; seconda foto dello slider iniziale | Mostra zona cottura, tavolo, finestra e disposizione, con ante chiuse e spazio ordinato. |
| 046.jpg | Dettaglio della cucina; terza foto dello slider iniziale | Brocca e bicchieri in ceramica: dettaglio leggibile e coerente con la Dimora e il territorio. |

Escluse tutte le altre 14 foto del pacchetto:

| File | Motivazione |
| --- | --- |
| 031.jpg, 037.jpg | Tavolo/parete predominanti; mostrano meno dell'insieme rispetto alla 030. |
| 032.jpg, 034.jpg | Alternative della zona cottura già coperta dalla foto ampia. |
| 033.jpg, 035.jpg | Dettagli di contenitori/elettrodomestici aperti: descrittivi ma poco invitanti e non necessari. |
| 036.jpg | Macchina del caffè e tavolo; dettaglio meno significativo della ceramica. |
| 038.jpg | Solo quadro/parete; non aiuta a capire lo spazio. |
| 039.jpg | Brocca e fondo cucina: più elementi concorrenti rispetto alla 046. |
| 040.jpg | Dettaglio inclinato con scritta e ceramiche, meno chiaro della 046. |
| 041.jpg | Vista ampia ma forno/cassetti aperti: preferita la 030, più ordinata. |
| 042.jpg | Porta/balcone predominanti; poco rappresentativa della cucina. |
| 044.jpg, 045.jpg | Tazze/tavolo ripetuti; evitato un insieme che possa suggerire una colazione servita in struttura anziché il voucher al bar. |

Non esiste una foto 043 nel pacchetto ricevuto. Le immagini scelte diventano `cucina-comune-vista-ampia.webp` e `ceramiche-cucina-comune.webp`.

## 8. Nuove foto HEIC del proprietario

Ispezionate tutte le 30 fotografie. Scelte tre viste differenti, pertinenti a Santo Stefano e alla posizione della Dimora; non presentate come foto delle Gole, della Fiumara o dei Nebrodi.

| Originale | Output e utilizzo | Motivazione |
| --- | --- | --- |
| IMG_8296.heic | `tetti-e-colline-dalla-dimora.webp` — apertura slider e CTA finale | Tetti e colline con luce calda, composizione naturale e buona leggibilità sullo smartphone. |
| IMG_8308.heic | `piazza-e-locali-dalla-dimora.webp` — colonna fotografica territorio | Piazza e locali vicini: comunica concretamente il centro da esplorare a piedi. |
| IMG_8312.heic | `vista-centro-storico-dalla-dimora.webp` — Dove siamo | Strade, tetti e profondità del centro storico: contesto utile alla posizione della struttura. |

Esclusioni delle altre 27:

| File | Motivazione |
| --- | --- |
| IMG_8295, IMG_8297 | Alternative vicine alla 8296, con ombrellone o composizione meno pulita. |
| IMG_8298–IMG_8305 | Viste laterali dalla finestra, spesso inclinate o ripetute; meno equilibrate delle selezionate. |
| IMG_8306, IMG_8307 | Alternative della piazza; 8308 risulta più bilanciata e meno inclinata. |
| IMG_8309–IMG_8311 | Parapetto più presente e viste sui tetti già rappresentate. |
| IMG_8313–IMG_8317 | Varianti vicine alla 8312, senza informazioni aggiuntive significative. |
| IMG_8318–IMG_8320, IMG_8323, IMG_8324 | Bordi della finestra, primo piano o pareti occupano una parte importante della composizione; poco efficaci nei layout previsti. |
| IMG_8321, IMG_8322 | Primo piano dell'edificio vicino: mostra meno del contesto del centro storico. |

Tutti gli originali HEIC sono conservati. Nel frontend vengono serviti esclusivamente WebP.

## 9. Slider precedente alle camere

Sequenza di quattro foto: **tetti/colline → cucina ampia → ceramiche sul tavolo → Camera Ortensia**. Una sola foto di camera: lo slider racconta anche posizione e spazio comune.

Conservato il componente approvato: soli pallini sovrapposti alla foto, senza didascalie, contatore, play o frecce; autoplay ogni 7,5 secondi. Mantiene pausa per hover, focus, interazione touch, pagina nascosta o componente fuori vista e disattivazione automatica con prefers-reduced-motion. Restano selezione dei pallini, tastiera e swipe. Lo slider territoriale a due foto conserva il medesimo comportamento.

## 10. Informazioni e accordion

Le informazioni pratiche sono **una sola colonna anche su desktop**, con sei voci: arrivo/partenza, parcheggio/bici, colazione, trasporti, servizi vicini e ristorazione. Rimosso l'accordion cucina duplicato: il tema è ora spiegato nella nuova sezione e nella FAQ approvata.

Mantenute le informazioni di Bar Da Franco, Chi Ciauru e degli altri locali/servizi già introdotti. Nessun nuovo orario, prezzo, servizio navetta o condizione inventato. Deposito bagagli resta nel copy approvato della terza card, senza nuova voce duplicata.

## 11. Cosa vedere: un elenco uniforme

Una sola lista verticale numerata, con tutte le sette voci:

1. Santo Stefano e la ceramica.
2. Gole di Tiberio.
3. Fiumara d'Arte.
4. Parco dei Nebrodi, con Mistretta e Valle delle Cascate.
5. Tusa e Halaesa Arconidea.
6. Spiagge della costa.
7. Santuario del Letto Santo.

Mistretta resta incorporata nei Nebrodi come richiesto nella revisione precedente, con link proprio e precisazione già presente sul perimetro del Parco; nella guida conserva l'approfondimento. Nessun contenuto è stato eliminato per creare destinazioni di peso diverso.

Tutte le voci usano **lo stesso rendering**: numero nella medesima colonna, titolo, corpo, riferimenti di viaggio, eventuali link nello stesso contenitore, identico padding e separatore inferiore. Stessi hover, reveal e target touch. L'altezza può variare con la quantità di testo; il pattern e le dimensioni orizzontali restano uguali. Nessuna lista aggiuntiva di destinazioni con un trattamento diverso.

Desktop da 1024 px: fotografie a sinistra e l'intero elenco a destra. Sotto: una sola colonna naturale. Le foto supportano l'insieme senza assegnare gerarchie diverse alle destinazioni. Sezione stagioni conservata con Primavera, Estate, Autunno e Inverno, senza ridisegno.

## 12. Dove siamo e CTA finale

**Dove siamo:** IMG_8312, con vista sul centro storico dalla Dimora, sostituisce la precedente fotografia. Foto a sinistra e contatti a destra su desktop; foto sopra la scheda su mobile. Proporzioni native, WebP responsive, alt concreto e angoli coerenti. Indirizzo e scheda Google Maps della Dimora invariati. Entrambi i contatti restano presenti: chiamate +39 328 642 1509 e WhatsApp +39 327 008 4357.

**CTA finale:** IMG_8296, tetti e colline dalla Dimora. Il testo è in un pannello bordeaux adiacente, non sovrapposto alla foto: leggibilità conservata senza oscurare lo scatto. Su mobile foto sopra e CTA sotto; su desktop affiancate. La fotografia è mostrata intera nel suo rapporto 16:9.

## 13. Elemento “Stefano casa”

Non individuato con certezza nei contenuti attivi cercati. Non sono state cambiate etichette simili a caso. Le normali etichette di navigazione EN/DE della casa sono rimaste approvate. Per una correzione ulteriore serve identificare l'elemento visibile preciso.

## 14. Immagini e performance

- Nove nuovi WebP, con varianti a 480 e 960 px: **27 file per 1.389.270 byte complessivi**. È il totale degli asset nuovi, non il download iniziale della pagina.
- Massimo lato 1600 px, senza ingrandire gli originali o tagliare artificialmente i bagni. Compressione e orientamento corretti tramite pipeline esistente, estesa con un manifesto di selezione ripetibile.
- HEIC decodificati prima della generazione WebP; nessun HEIC referenziato dal frontend.
- Metadati width/height e srcSet generati dalla pipeline; lazy loading sotto la piega. Foto della hero e comportamento LCP già approvati conservati.
- Nessuna nuova dipendenza. Bundle homepage compresso circa 84,2 kB; CSS circa 9,6 kB. Non è stata eseguita una nuova misurazione di Core Web Vitals: non viene dichiarato un punteggio o una certificazione non misurata.

## 15. Verifica responsive e visiva

Controllata la build locale su **360, 390, 430, 600, 768, 1024 e 1440 px**, con screenshot e verifiche delle dimensioni effettive.

| Verifica | Esito |
| --- | --- |
| Larghezza pagina uguale al viewport | Passa a tutte le sette larghezze: nessun overflow orizzontale. |
| Tre card narrative | Stesso colore, stessa altezza e nessuna card nascosta; griglia desktop, colonna mobile. |
| Cucina | Testo sopra le foto su mobile, layout editoriale su desktop; proporzioni native. |
| Destinazioni | Tutte e sette con stessa larghezza, padding, schema e separatore alle sette larghezze. |
| Accordion pratici | Una colonna a tutte le larghezze; apertura e orari controllati sullo smartphone. |
| Bagni nei modal | Glicine: vista completa e doccia; Papavero: entrambe le nuove viste controllate a 360 px. Immagini intere; navigazione e chiusura con ritorno del focus funzionanti. |
| Dove siamo / CTA finale | Foto nuove, non deformate e senza crop aggressivo; testi e CTA leggibili. |
| Hero / parallax | Hero senza border-radius; tre vantaggi visibili a 360 px. Parallax reale: a scroll 270 px l'immagine si sposta di circa 45,9 px; configurazione approvata conservata. |
| EN / DE e menu | Copy e sconto coerenti; nessun overflow nelle viste mobile e desktop controllate. |
| Contatti | Tel 328 per chiamate e wa.me 327 per WhatsApp; Maps della Dimora conservato. |

Gli screenshot e le misure sono in `audit/revisione-2026-10-05/`, incluso `responsive.json`. Focus, alt, navigazione da tastiera e prefers-reduced-motion sono conservati; i controlli eseguiti non costituiscono una certificazione WCAG completa.

## 16. Guida PDF

Guida aggiornata all'8%, animali gratis su richiesta ed edizione ottobre 2026. Rigenerata attraverso lo script del progetto. Controllo del testo estratto e rendering visivo di **tutte le nove pagine**: nessuna occorrenza commerciale del 10%, nessun problema evidente di impaginazione. La guida HTML indicizzabile resta il contenuto principale; il PDF rimane un supporto.

## 17. File modificati in questa revisione

Elenco riferito al confronto con lo stato locale prima del lavoro del 5 ottobre, non al confronto Git complessivo, che comprende revisioni precedenti.

| Area | File |
| --- | --- |
| Struttura e componenti | `src/App.tsx`, `src/GuestInformation.tsx`, `src/KitchenSection.tsx` (nuovo), `src/StayBenefits.tsx`, `src/WelcomeGallery.tsx` |
| Contenuti e configurazione | `src/content.ts`, `src/guest-info.ts`, `src/guide-content.ts`, `src/local-info.ts`, `src/site-settings.ts`, `src/visit-content.ts` |
| Immagini | `src/image-settings.ts`, `src/image-variants.json` (solo generato) |
| Stile e prerender | `src/index.css`, `src/prerender.tsx`, `index.html` |
| Pipeline e controlli | `scripts/prepare-images.py`, `scripts/image-selection-2026-10-05.json` (nuovo), `scripts/verify-site.py`, `scripts/generate-guide-pdf.py` |

Inoltre: nove WebP base e relative 18 varianti in `public/images/bnb/`, PDF aggiornato in `public/`, originali archiviati, inventario e prove visive in `audit/`, questo report. `dist/` e `.prerender/` derivano esclusivamente dalla build. Nessuna modifica manuale degli output.

## 18. Risultati dei controlli

| Comando | Risultato |
| --- | --- |
| npm run typecheck | **PASS** |
| npm run lint | **PASS** |
| npm run build | **PASS**, frontend e prerender generati |
| python3 scripts/verify-site.py | **PASS**, zero errori: quattro percorsi e 59 riferimenti locali controllati |

Il verificatore controlla anche sconto 8% nelle tre lingue, copy italiano delle card, ordine camere/cucina, pattern unico delle destinazioni, numeri, orari, cucina, nuovi asset, assenza di riferimenti HEIC e integrità SHA-256 dei 131 originali.

**Due avvisi preesistenti nel verificatore:** inventario storico e vecchio backup ZIP non disponibili; non è possibile confrontare gli asset con quel materiale assente. Il confronto di questa revisione e l'integrità degli originali appena ricevuti sono invece disponibili. Dettagli in `audit/verifica-finale.json`.

## 19. Informazioni aperte e limiti

- “Stefano casa”: elemento non identificato con certezza.
- Nessuna nuova informazione turistica o logistica introdotta senza fonte. Link pubblici già verificati nelle revisioni precedenti conservati; questa revisione controlla riferimenti locali e resa, non ricertifica ogni sito esterno in tempo reale.
- Le modalità del servizio autobus locale e la visita al Mulino di Caronia restano da confermare come nelle revisioni precedenti; non sono stati pubblicati dettagli incerti.
- Nessun problema bloccante emerso nei controlli richiesti. Le due indisponibilità storiche sopra indicate restano limiti del confronto archivistico.

## 20. Prima di fare commit

1. Rivedere la selezione fotografica nel sito locale, in particolare il bagno Glicine e le foto Dove siamo/CTA finale.
2. Decidere dove conservare l'archivio `originals/` (circa 76 MB) e i provini prima dello staging: il sito pubblica soltanto gli asset WebP, mentre gli originali devono restare conservati.
3. Controllare la selezione dei file nel diff: il checkout contiene anche lavori precedenti. Nessun file è stato aggiunto automaticamente allo staging.

Commit e pubblicazione restano da eseguire soltanto su richiesta esplicita.
