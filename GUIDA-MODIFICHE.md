# Guida alle modifiche — La Dimora dei Ricci

Stato: preview locale, nessuna pubblicazione. Non modificare direttamente `dist/`, `.prerender/` o `src/image-variants.json`: sono generati.

## 1. Aprire e fermare il sito

Apri il terminale nella cartella che contiene questo documento. Con Node.js e npm installati:

```sh
npm install
npm run build
npm run preview -- --host 127.0.0.1 --port 4177 --strictPort
```

Apri **http://127.0.0.1:4177/**, anche nel browser laterale. Per fermare il server premi **Ctrl+C** nel terminale che lo esegue. Per riaprirlo ripeti l'ultimo comando. Se la porta risulta occupata, prova prima ad aprire l'indirizzo: la preview potrebbe essere già attiva. Il server avviato da Codex può essere fermato chiedendo a Codex di chiudere la preview.

Per modifiche con aggiornamento automatico: `npm run dev -- --host 127.0.0.1 --port 4177 --strictPort`, dopo aver fermato l'altro server. Per la verifica finale usa **build + preview**, perché il build genera l'HTML e i metadati definitivi. Dopo ogni nuovo build, ricarica il browser.

Le dipendenze sono già installate qui. È disponibile anche `pnpm-lock.yaml` per reinstallazioni riproducibili con `pnpm install --frozen-lockfile` e pnpm compatibile. Evita di alternare gestori nello stesso ambiente senza verificarne il risultato.

## 2. Dove modificare cosa

| Contenuto | File |
|---|---|
| Hero, crop, zoom, parallax, SEO, social proof | `src/site-settings.ts` |
| Camere, foto delle gallerie, servizi, testi generali, recensioni | `src/content.ts` |
| FAQ, destinazioni, stagioni, note famiglie e mare | `src/visit-content.ts` |
| Colazione, parcheggi, bagagli, mobilità e attività locali | `src/guest-info.ts` / `src/GuestInformation.tsx` |
| Termini (generati in HTML statico dal build) | `src/TermsPage.tsx` / `public/legal.css` |
| Alt, didascalie, crop delle altre immagini | `src/image-settings.ts` |
| Palette, caratteri e impaginazione | `src/index.css` |
| Struttura sezioni / gallerie | `src/App.tsx` / `src/RoomModal.tsx` |
| Immagini pubblicate / originali conservati | `public/images/` / `originals/foto-bnb-2026-09-14/` |
| Privacy | `public/privacy.html` |

I testi sono in tre lingue: `it`, `en`, `de`. Mantienile coerenti.

## 3. Hero, ritaglio e parallax

In `site-settings.ts` modifica `heroImage.src`. Il percorso web inizia con `/images/`, non con `/public/images/`. L'alt della hero è `copy.it.alts.hero` in `content.ts` (anche `en` e `de`); può essere sovrascritto in `imageSettings`.

| Schermo | `position` | `zoom` |
|---|---|---|
| Desktop ≥1024 px | `35% 60%` | `1.22` |
| Tablet 768–1023 px | `30% 62%` | `1.08` |
| Mobile <768 px | `15% 65%` | `1.12` |

`position` indica orizzontale/verticale: aumentando la prima percentuale si sposta il ritaglio verso destra. L'effetto dipende anche dalle proporzioni e dallo zoom, ancorato a sinistra. `zoom: 1` non ingrandisce ulteriormente. Il crop CSS **non altera l'originale**. Ricontrolla sempre tutte le dimensioni dopo una modifica.

In `heroImage.parallax`, `enabled: false` spegne il movimento. `intensity` è 0.32, `maxPixels` è 110; sotto 768 px si usano `mobileIntensity: 0.24` e `mobileMaxPixels: 50`. Il parallax è disattivato per chi preferisce movimento ridotto. Il movimento usa transform, un listener passivo e requestAnimationFrame; le misure vengono aggiornate solo al ridimensionamento. Non servono librerie aggiuntive.

## 4. Aggiungere, sostituire o togliere foto

1. Conserva l'originale fuori da `public/`. Aggiungi una copia WebP nella sottocartella adatta di `public/images/bnb/`, con nome descrittivo, minuscolo e trattini.
2. In `content.ts`, dentro `rooms`, `cover` è la copertina e `gallery` è l'elenco ordinato. Cambia un percorso per sostituire una foto; aggiungi una riga per inserirla; rimuovi una riga per nasconderla. Non lasciare la galleria vuota. Se togli anche la copertina, scegline prima un'altra.
3. In `image-settings.ts` aggiungi alt/caption/crop. Le immagini territoriali sono in `nearbyImages`, con autore e licenza; quelle dei servizi sono in `services` di `content.ts`.
4. Rigenera le varianti e controlla la preview.

Esempio da aggiungere dentro `imageSettings`:

```ts
'/images/bnb/camere/glicine/nuova-foto.webp': {
  alt: { it: 'Camera Glicine con letto matrimoniale e letto a castello',
         en: 'Glicine Room with a double bed and bunk bed',
         de: 'Zimmer Glicine mit Doppelbett und Etagenbett' },
  caption: { it: 'Gli spazi della Camera Glicine' },
  desktop: '50% 45%', tablet: '50% 45%', mobile: '60% 45%'
},
```

La didascalia è visualizzata nella galleria camere; l'alt è un'alternativa testuale. Le miniature hanno alt vuoto perché il pulsante possiede già un nome. Per le foto ordinarie i tre campi controllano il punto di ritaglio; lo zoom configurabile è previsto per la hero.

Non cancellare gli originali. Prima di eliminare un file pubblico, cerca il percorso in tutto `src/`. Puoi semplicemente togliere il riferimento dalla pagina e conservare il file.

Varianti automatiche, con Python 3 e Pillow disponibili:

```sh
python3 scripts/prepare-images.py
npm run typecheck
npm run lint
npm run build
python3 scripts/verify-site.py
```

Lo script genera versioni 480/960 px solo se più piccole della base, metadati e icone; non cambia gli originali o le WebP di base. Riserva i suffissi `-480` e `-960` alle varianti. Le nuove WebP sono rilevate automaticamente. Per PNG/JPEG prepara prima una copia WebP. Non rilanciare `audit-assets.py` nei controlli ordinari: rigenererebbe l'inventario iniziale, che va conservato.

## 5. FAQ e orari

Modifica `faqs` in `visit-content.ts`: ogni domanda ha `id` unico e testi in tre lingue. Il componente HTML nativo funziona da tastiera e prima di JavaScript.

Gli orari di camere, gallerie e footer sono in `copy.it.stay`, `copy.en.stay`, `copy.de.stay` di `content.ts`. Aggiorna anche la FAQ sugli orari. Orari definitivi: inverno check-in 15:00–22:00, estate 15:00–23:00, check-out entro le 10:00 tutto l’anno. Non sono stati inventati mesi di inizio/fine stagione. Schema mantiene il check-out, ma non un unico check-in incompatibile con le due fasce stagionali.

## 6. Recensioni e prenotazione diretta

`site.socialProof` contiene il rating 4,9 verificato il 27 settembre 2026 sulla scheda Google Maps in Via Brofferio 12. Il conteggio resta non pubblicato. Hero, recensioni e posizione rimandano alla scheda esatta. Non aggiungere AggregateRating allo structured data.

I quattro estratti reali sono in `reviews` di `content.ts`: sono rimasti invariati. Lo sconto definitivo comunicato dal proprietario è **8%**, in tutte le lingue, nella hero e nella FAQ. I contatti definitivi sono chiamate +39 328 642 1509, WhatsApp +39 327 008 4357, email ladimoradeiricci@gmail.com.

La cucina condivisa è disponibile per tutti: collegamento diretto con Ortensia e Tulipano, chiave dedicata per Glicine e Papavero. Testo centralizzato in `guest-info.ts`, con descrizioni coerenti nelle camere. Bambini fino a 3 anni gratis; animali su richiesta, senza limiti o supplementi inventati.

La nuova guida indicizzabile è `/guida-santo-stefano-di-camastra/`: contenuti e fonti in `src/guide-content.ts`, pagina in `src/GuidePage.tsx`, stile in `src/guide.css`. Viene generata dal build e caricata separatamente nella navigazione. Il PDF italiano usa gli stessi contenuti, senza nuove fotografie. Per rigenerarlo dopo modifiche: `npm run build`, `python3 scripts/generate-guide-pdf.py` (richiede reportlab), poi `npm run build`. Controllare sempre visivamente HTML e PDF.

## 7. Logo, favicon, SEO e contatti

`site.logo` è il logo pubblico. `prepare-images.py` usa `Logo 1.png` per il marchio completo e `Logo 2.png` ad alta risoluzione per il simbolo. Conserva le vecchie sorgenti se cambi marchio e modifica gli input dello script. Le icone 16/32/48 px sono naturalmente meno dettagliate: non deformare il riccio.

`seo` e `structuredData` in `site-settings.ts` alimentano title, description, canonical, social, dati strutturati e sitemap nel build. Il dominio è `https://ladimoradeiricci.com` e deve coincidere con quello scelto per il rilascio. Le lingue sono nella stessa URL, non pagine SEO indipendenti: non aggiungere hreflang verso URL inesistenti.

I telefoni sono centralizzati in `site`: `phone` / `phoneLabel` per le chiamate (+39 328 642 1509), `whatsappPhone` per WhatsApp (numero confermato +39 327 008 4357). Footer, contatti, modali, CTA e Termini usano questi campi. Il template `index.html` contiene anche un telefono di fallback: il build lo sincronizza con Schema. Se cambia il trattamento dei dati, la privacy richiede revisione del titolare.

Il colore hover dei pulsanti chiari è il token `--secondary-hover: #b94e34` (testo bianco, contrasto 5:1). Le CTA arancioni mantengono i colori precedenti.

Le informazioni esterne e i limiti della verifica sono documentati in `REPORT-REVISIONE-2026-09-27.md`. Non aggiungere orari del bus, gratuità o altezza massima del parcheggio senza nuove evidenze. I Termini non contengono politiche di cancellazione o pagamento inventate; prima del rilascio completare l'identità legale del gestore e far validare il testo.

## 8. Dopo l'approvazione

Si potrà caricare **solo `dist/` sul progetto Netlify esistente**, senza migrare provider. Non caricare `originals/`, `audit/`, `node_modules/` o tutto il progetto. Dominio, DNS, HTTPS e redirect sono un passaggio distinto da verificare; non alterare i record email. Nessun deploy è stato eseguito durante questa revisione.

## Revisione responsive del 29 settembre 2026

I nove vantaggi si modificano in `src/guest-info.ts` e sono renderizzati da `StayBenefits.tsx`. Titoli e descrizioni sono volutamente brevi in IT/EN/DE. La griglia mostra due card per riga sotto 600 px e tre da 600 px; l'ultima card mobile è centrata. Solo due colori alternati, stessa altezza, nessuna sillabazione automatica, nessun carosello. Evitare parole composte troppo lunghe nei titoli tedeschi.

Il contenitore `.room-modal` protegge gli angoli e mantiene il pulsante di chiusura; `.modal-scroll` è l'unica area scorrevole. Non spostare `overflow: hidden` su quest'ultima. `RoomAmenities.tsx` condivide icone e dati tra schede e modali.

`useScrollReveal.ts` gestisce le entrate con IntersectionObserver, senza nascondere il contenuto quando JavaScript è disattivato. La hero non usa lazy loading; le foto successive sì.

Le nuove fotografie del proprietario sono in `territoryImages`. La homepage usa fontana e muro di maioliche nel formato originale; Villa Italia resta disponibile. La conversione si ripete con `scripts/prepare-images.py --territory` seguito dai tre JPEG nell'ordine giardino, muro, fontana: originali conservati fuori da `public`, varianti e manifest generati dallo script.
