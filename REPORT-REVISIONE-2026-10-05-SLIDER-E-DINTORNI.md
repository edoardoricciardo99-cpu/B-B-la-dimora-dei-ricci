# Revisione del 5 ottobre 2026 — slider, dintorni e chiusura

## Stato del progetto

Repository verificato: `B-B-la-dimora-dei-ricci`, remoto `edoardoricciardo99-cpu/B-B-la-dimora-dei-ricci`. Branch: **dimora_ricci_0.2**. Le modifiche locali delle revisioni precedenti sono state conservate. Nessun commit, push, merge, deploy o intervento su main.

Questa revisione prosegue il lavoro documentato in `REPORT-REVISIONE-2026-10-05.md` e ne aggiorna le indicazioni sulla cucina, sullo slider iniziale, sul territorio e sulla chiusura. Le selezioni delle gallery camere e dei bagni rimangono valide.

Anteprima della build: <http://127.0.0.1:4178/>.

## Modifiche realizzate

1. **Slider “La Dimora”.** La quarta fotografia è ora il JPEG **049.jpg** fornito dal proprietario, convertito in WebP: primo piano degli asciugamani arrotolati. Rimangono quattro pallini sulla foto, autoplay e nessuna didascalia, freccia o pulsante play aggiuntivo.
2. **Cucina.** Le due fotografie separate sono sostituite da un unico slider con quattro immagini complementari: vista ampia, tavoli, angolo caffè e ceramiche. Desktop: testo e slider affiancati. Mobile: testo sopra, slider sotto. Posizione subito dopo le camere e copy dell’accesso conservati.
3. **Dintorni.** Un solo elenco numerato con sette destinazioni. Ciascuna utilizza lo stesso componente fotografico, blocco di testo, numerazione, separatore e comportamento responsive. Da 1024 px: foto a sinistra e testo a destra. Sotto: una colonna, foto sopra il testo. Le foto rappresentano i luoghi citati; Fiumara d’Arte ha due immagini nello stesso piccolo slider.
4. **Guida rimandata.** Rimossi la nota esplicativa sugli itinerari, il blocco promozionale e i link alla guida dalla homepage e dal footer. L’architettura della guida è conservata per una revisione futura: `guidePublished = false`, pagina `noindex,follow`, esclusione dalla sitemap. Il suo URL diretto resta raggiungibile; non viene promosso dal sito. PDF e contenuti precedenti non sono stati cancellati o rigenerati.
5. **Un’unica chiusura.** “Dove siamo” e la CTA conclusiva sono uniti in una sezione fotografica con la vista del centro storico già approvata, indirizzo, telefono, WhatsApp, Maps e “Prenota ora - 8% di sconto”. La foto è ingrandita e si muove con lo scroll; la velatura bordeaux e una luce radiale danno profondità mantenendo leggibile il testo. Segue il footer esistente.

Il Letto Santo rimane nell’elenco, **senza fotografia**, come concordato nell’ultima risposta. Nella colonna visiva compare un collegamento tipografico alla pagina ufficiale, senza attribuire al santuario fotografie di altri luoghi.

## Fotografie selezionate

### Materiale del proprietario

| Originale | Utilizzo | Motivazione |
| --- | --- | --- |
| `049.jpg` | Quarta foto dello slider iniziale | Primo piano richiesto degli asciugamani; sostituisce la vista più ampia del letto. |
| Cucina `030.jpg` | Prima foto della cucina; già presente nello slider iniziale | Mostra l’organizzazione completa dello spazio. |
| Cucina `037.jpg` | Seconda foto della cucina | Tavoli e sedie: vista complementare della zona comune. |
| Cucina `036.jpg` | Terza foto della cucina | Angolo caffè e ceramiche; dettaglio distinto dalla vista ampia. |
| Cucina `046.jpg` | Quarta foto della cucina; già presente nello slider iniziale | Brocca e bicchieri in ceramica. |
| Foto del muro di ceramiche già fornita | Santo Stefano e la ceramica | Mostra concretamente il tema della destinazione. |
| `IMG_8312.HEIC`, già convertita nella revisione precedente | Chiusura unica | Vista sui tetti e sulle vie dalla Dimora, pertinente alla posizione della struttura. |

Per la cucina non sono state aggiunte le viste con ante/cassetti aperti o inquadrature quasi identiche: quattro fotografie coprono spazio, zona comune e dettagli senza allungare la sezione. Nessun originale è stato sovrascritto. La copia di 049.jpg è identica al file fornito, verificata con SHA-256.

### Immagini del territorio

| Destinazione | Fonte e autore | Licenza indicata dalla fonte |
| --- | --- | --- |
| Gole di Tiberio | [Centro della Gole con giochi di luce](https://commons.wikimedia.org/wiki/File:Centro_della_Gole_con_giochi_di_luce.jpg), Rosariovecchio89 | CC BY-SA 4.0 |
| Fiumara: Piramide del 38° Parallelo | [Piramide a Motta d’Affermo](https://commons.wikimedia.org/wiki/File:Motta_d%27Affermo_-_Piramide_38%C2%BA_parallelo_-_2025-09-03_17-11-37_001.jpg), Gianfranco Molino | CC BY-SA 4.0 |
| Fiumara: Finestra sul mare | [Villa Margi — Finestra sul mare](https://commons.wikimedia.org/wiki/File:REITANO_1140-11-06-52-7577.jpg) | Pubblico dominio; autore non identificato per nome nella scheda |
| Parco dei Nebrodi | [Stagno Nebrodi](https://commons.wikimedia.org/wiki/File:Stagno_Nebrodi.jpg), Davide Mauro; asset già presente | CC BY-SA 4.0 |
| Tusa / Halaesa | [Agora of Halaesa](https://commons.wikimedia.org/wiki/File:Agora_of_Halaesa.jpg), Rjdeadly | CC BY-SA 4.0 |
| Costa / Villa Margi | [Finestra sul mare — Villa Margi](https://commons.wikimedia.org/wiki/File:Finestra_sul_mare_-_Villa_Margi,_ME.jpg), iloveagrigento.it | CC BY 2.0 |

Fonte, autore e licenza sono collegati sotto le immagini; per i WebP viene indicato l’adattamento. L’asset più piccolo della Finestra è mantenuto entro la sua risoluzione disponibile, senza ingrandire artificialmente il file. Il suo rapporto di forma viene rispettato nello slider.

Confermati i riferimenti alle opere sul [sito della Fondazione Antonio Presti](https://www.fondazioneantoniopresti.org/progetto/fiumara-darte/): il progetto è voluto da Antonio Presti, la Piramide è di Mauro Staccioli e la Finestra sul mare è di Tano Festa. Non sono stati aggiunti orari, prezzi, trasporti o previsioni meteo non verificati.

## Immagini, accessibilità e movimento

- Alt descrittivi in IT/EN/DE per tutte le immagini, comprese le miniature nei modal delle camere. Controllo nel browser: zero alt vuoti, anche con il modal Glicine aperto.
- Riutilizzato `PhotoSlider`: autoplay ogni 7,5 secondi, pallini, tastiera e swipe. L’autoplay si ferma durante hover/focus/interazione, quando la sezione è fuori schermo o la scheda è nascosta; disattivato con `prefers-reduced-motion`.
- Parallax finale limitato a ±52 px, tramite `transform`, listener passivo e un aggiornamento per frame. Coordinate ricalcolate anche quando si apre un accordion sopra la sezione. Ridotto/disattivato secondo la preferenza di movimento.
- L’effetto di velatura è realizzato con gradienti CSS, senza librerie o rendering WebGL aggiuntivi.
- Focus visibile, link Maps invariato e contatti corretti: chiamate **+39 328 642 1509**, WhatsApp **+39 327 008 4357**.
- Corretti nel controllo mobile i margini del contenuto finale e il contrasto del pulsante Maps. La CTA fissa ora si nasconde correttamente quando sono visibili hero o sezione finale.
- Hero, parallax della hero, stagioni, recensioni, FAQ, copy delle tre card e gallery delle camere preservati. Le fotografie interne mantengono angoli da circa 20 px; hero e sfondo finale hanno bordi rettilinei.

La pipeline esistente ha prodotto **8 nuovi asset WebP di base**, con varianti 480/960 quando consentite dalla dimensione sorgente. Metadati `width`, `height` e `srcset` rigenerati dallo script. Nessun HEIC viene servito al browser. Le immagini aggiunte sotto la hero sono lazy. Nessuna nuova dipendenza.

## File interessati da questa revisione

| Gruppo | File |
| --- | --- |
| Struttura e sezioni | `src/App.tsx`, `src/WelcomeGallery.tsx`, `src/KitchenSection.tsx`, `src/LocationFinale.tsx` (nuovo), `src/DestinationMedia.tsx` (nuovo) |
| Testi e foto abbinate | `src/content.ts`, `src/visit-content.ts`, `src/destination-photos.ts` (nuovo) |
| Alt e presentazione | `src/RoomModal.tsx`, `src/index.css` |
| Guida rimandata e sitemap | `src/GuidePage.tsx`, `src/guide-content.ts`, `src/prerender.tsx`, `scripts/build.mjs`, `public/sitemap.xml` |
| Pipeline e verifiche | `scripts/image-selection-2026-10-05-seguito.json` (nuovo), `scripts/verify-site.py` |
| Asset e prove | WebP/varianti in `public/images/bnb/`, copie sorgenti in `originals/revisione-2026-10-05-seguito/`, prove in `audit/revisione-2026-10-05-seguito/` |
| Generato automaticamente | `src/image-variants.json`, output di build; nessuna modifica manuale |

## Verifiche

| Controllo | Esito |
| --- | --- |
| `npm run typecheck` | Passato |
| `npm run lint` | Passato |
| `npm run build` | Passato; prerender, metadati e sitemap generati |
| `python3 scripts/verify-site.py` | Passato: zero errori, 72 riferimenti locali e 4 route controllati |
| `git diff --check` | Passato |
| Controllo visivo locale | Hero, cucina, dintorni e chiusura a **360, 390, 430, 600, 768, 1024 e 1440 px** |
| Overflow | Larghezza della pagina uguale al viewport a tutte le sette misure |
| Lingue | IT/EN/DE; controllata anche la chiusura tedesca a 360 px |
| Slider | Foto 049 selezionabile; quattro foto cucina; osservato avanzamento automatico della cucina; seconda foto Fiumara verificata |
| Parallax finale | Movimento misurato nel browser: offset da circa −15 px a +40 px tra due posizioni di scroll |
| Console | Nessun errore o warning osservato nella build locale |
| Dati commerciali | Sconto 8%, numeri, orari, cucina e bambini coerenti; nessun vecchio sconto attivo |

Il verificatore segnala solo due limiti già presenti: inventario e ZIP di backup storici non disponibili. Il confronto storico generale non è quindi eseguibile; gli originali dei nuovi pacchetti sono comunque verificati con gli inventari della revisione precedente e il nuovo elenco SHA-256. Le verifiche non costituiscono una misurazione Core Web Vitals su rete reale o una certificazione WCAG.

Screenshot e dati: `audit/revisione-2026-10-05-seguito/`. Le schede delle fonti fotografiche sono documentate in `crediti-fotografici.json`; i risultati responsive in `responsive.json` e `hero-responsive.json`.

## Prima di un eventuale commit

Non restano blocchi per questa richiesta. La foto del Letto Santo è stata esplicitamente esclusa e la guida resta rimandata. Prima di un commit conviene rivedere il diff complessivo, che include tutte le revisioni locali precedenti, ed evitare di aggiungere automaticamente originali e materiali di audit al repository pubblico senza una scelta esplicita. Nessuna pubblicazione è stata effettuata.
