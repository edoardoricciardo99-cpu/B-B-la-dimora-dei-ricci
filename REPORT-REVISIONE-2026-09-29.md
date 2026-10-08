# Revisione responsive — 29 settembre 2026

Repository: `B-B-la-dimora-dei-ricci`. Branch verificato: `dimora_ricci_0.2`, riconfermato dal proprietario dopo il riferimento a `nuovo-sito` nel testo incollato. Nessun commit, push, merge o deploy. Tutte le modifiche rimangono locali e si aggiungono alla revisione del 27 settembre.

## Risultato

- Hero rettilinea, crop distinto per mobile/tablet/desktop, casa rossa esclusa agli otto breakpoint verificati. Su smartphone fotografia sopra un pannello chiaro; da 768 px testo sulla fotografia con gradiente nero localizzato. Paragrafo più stretto e tre vantaggi sempre presenti.
- CTA “Controlla disponibilità”, microcopy “Prenota direttamente · Risparmia il 8%”, sticky “Disponibilità · -8%”. Nessuna cornice bianca sul pulsante principale; focus e feedback mantenuti.
- Introduzione approvata invariata, affiancata alla foto reale della cucina su desktop; foto sotto al testo su mobile.
- Nove card uniformi: Centro storico, Prenota diretto, Colazione inclusa, Parcheggio vicino, Comfort essenziali, Cucina comune, In famiglia, Bike friendly, Con i tuoi animali. Solo neutro e bordeaux alternati, icone bianche sul bordeaux, zampa riconoscibile. Nessuna numerazione/carousel; ultima card centrata su mobile.
- Copy ulteriormente accorciato su richiesta del 29 settembre, in italiano, inglese e tedesco. Nessun trattino di sillabazione o spezzatura arbitraria delle parole nelle card. A 360 px ogni card passa da circa 363 a 268 px di altezza. “Comfort essenziali”: “Bagno privato, climatizzazione, Wi-Fi e TV in ogni camera.”
- Camere con titolo e introduzione sovrapposti, icone bagno/clima/Wi-Fi/TV/cucina, accesso alla cucina specificato per ciascuna camera. Rimossi i callout separati su bambini e colazione. Ripristinato il box orari prima delle camere e mantenuto quello pratico, come richiesto.
- Una macrosezione pratica: orari evidenti; accordion parcheggio, bagagli, cucina, aeroporto e Dove mangiare. Chi Ciauru è dentro quest’ultimo, con Maps e descrizione già verificati.
- Territorio con ceramiche, Gole di Tiberio, Fiumara, Nebrodi e richiami visibili a Mistretta, Tusa/Halaesa e costa. Ripristinate le quattro stagioni, senza inventare programmi estivi. Guida indicizzabile e PDF mantenuti.
- Entrambi i contatti nel footer e nella posizione, contactPoint coerenti nei dati strutturati; credito “© 2026 La Dimora dei Ricci · Design by Sergio Todaro”.

## Responsive e movimento

Verificati in Google Chrome: 360, 375, 390, 430, 600, 768, 1024 e 1440 px. Nessun overflow orizzontale della pagina o dei testi delle card. Due card per riga sotto 600 px, tre da 600 px; larghezza e altezza uniformi a ciascun breakpoint. Screenshot e misure in `audit/revisione-3/`, dati in `controlli-browser.json`.

Parallax esistente riutilizzato: intensità desktop 0.32 / massimo 110 px, mobile 0.24 / massimo 50 px. Misurati 57.6 px di movimento su 180 px di scroll desktop e 25.92 px su 108 px mobile. Listener passivo, requestAnimationFrame e misure memorizzate tramite ResizeObserver. Nessuna libreria aggiunta. `prefers-reduced-motion` azzera il movimento.

Reveal leggeri con IntersectionObserver, opacity/translate; hover con lieve sollevamento delle card, risposta delle icone e dei link. Il contenuto prerenderizzato resta visibile senza JavaScript. Le foto successive alla hero sono lazy e hanno dimensioni dichiarate; la hero mantiene priorità alta. Nessuna misurazione certificata di Core Web Vitals effettuata.

## Correzione delle modali

Una regola condivisa per il border-radius reimpostava `overflow: hidden` sulla modale, prevalendo sullo scroll mobile. Ora una cornice esterna mantiene raggio e pulsante Chiudi; il contenitore interno `.modal-scroll` gestisce tutto lo scorrimento, con altezza massima relativa a `dvh`, `overscroll-behavior` e `touch-action: pan-y`. Il testo non ha un secondo scroll annidato. Gli swipe foto distinguono movimento orizzontale e verticale.

Provate tutte e quattro le camere su Chrome a 1440×560 e 360×560: la rotella raggiunge il fondo e rende visibile la CTA finale. Verificati Home/End, ripristino del focus e rimozione del blocco body alla chiusura. Console finale senza warning/errori.

Limite: il tentativo di swipe su emulatore Chrome iPhone SE è stato bloccato dalle API di automazione (timeout del gesto). Non considero verificati il touch fisico, Safari/iOS o il gesto con un trackpad fisico. Prima del commit raccomando una prova breve delle modali su telefono reale e trackpad; non è una richiesta di pubblicazione.

## Fotografie

Mantenute nella homepage le nuove foto del vaso/fontana sul mare e del muro di maioliche: formato naturale 3:2, senza crop quadrato o deformazioni. La foto di Villa Italia è conservata come asset e originale, ma non usata nella composizione per evitare tre fotografie consecutive. Cucina: scelta la fotografia con brocca e bicchieri, che mostra insieme spazio e identità locale. Nessuna foto delle camere sostituita.

I tre JPEG del proprietario sono conservati in `originals/territorio-proprietario-2026-09-27/`; nove WebP (base, 480 e 960 per ciascuna foto) generati dalla pipeline. `src/image-variants.json` aggiornato dallo script, mai a mano. Nessuna foto preesistente risulta alterata rispetto alla fotografia dello stato effettuata all’inizio di questa revisione.

## File di questa revisione responsive

Modificati rispetto alla prima revisione:

- `src/App.tsx`, `src/index.css`, `src/site-settings.ts`: struttura, hero, parallax, responsive, CTA e contatti.
- `src/guest-info.ts`, `src/StayBenefits.tsx`, `src/GuestInformation.tsx`: nove vantaggi, copy compatto, accordion, link Bar Da Franco e Chi Ciauru.
- `src/RoomModal.tsx`, `src/RoomAmenities.tsx`, `src/FeatureIcon.tsx`, `src/content.ts`: scroll, icone, accesso cucina e zampa. RoomAmenities è nuovo; StayBenefits e useScrollReveal sono nuovi rispetto alla prima revisione.
- `src/useScrollReveal.ts`, `src/visit-content.ts`, `src/image-settings.ts`, `src/GuidePage.tsx`: animazioni, stagioni, nuove foto, contatti/crediti nella guida.
- `scripts/prepare-images.py`, manifest generato `src/image-variants.json`, nove WebP e tre originali; `scripts/verify-site.py`, `GUIDA-MODIFICHE.md`, questo report e prove in `audit/`.

Il Git diff cumulativo contiene anche i file della revisione precedente (SEO, prerender, sitemap, guida/PDF e relativa generazione). Consultare `REPORT-REVISIONE-2026-09-27.md` per quella parte. Nessuna modifica manuale a `dist/` o `.prerender/`: ricreati esclusivamente dal build.

## Contenuti e collegamenti

Confronto con lo stato iniziale della revisione responsive: introduzione approvata, FAQ, recensioni, contenuti della guida, link Maps della Dimora e social proof preservati. Sconto 8%, orari e numeri coerenti. Nessun AggregateRating introdotto.

Scheda Bar Da Franco verificata in Google Maps durante la revisione: Via Umberto I 65, ID luogo `0x1316d934203eebcb:0x6f2f0073b600c62c`. Link diretto presente sulla colazione. Link Dimora e Chi Ciauru mantenuti. Nessun nuovo orario/menu/prezzo del ristorante pubblicato.

Restano le informazioni non confermate già indicate nel report precedente: autobus locale, dettagli di visita del Mulino di Caronia, ubicazione ufficiale della palestra all’aperto e programmi futuri degli eventi. Non sono stati aggiunti dati operativi incerti. I programmi stagionali vengono rimandati agli organizzatori; nessuna data inventata. I link interni e i file sono verificati automaticamente; ciò non garantisce la futura disponibilità dei siti esterni.

## Test finali

| Controllo | Esito |
|---|---|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `python3 scripts/verify-site.py` | PASS, zero errori, due avvisi storici |
| Chrome, otto breakpoint | PASS per layout, crop e visibilità |
| Quattro modali, desktop e mobile basso | PASS rotella; tastiera/focus verificati |
| Touch / trackpad fisici | Da verificare su dispositivo reale |

Il verificatore controlla quattro percorsi, 44 riferimenti locali, 13 FAQ, 15 sezioni della guida, title/meta/OG/canonical, sitemap, contatti e dati della struttura. I due avvisi riguardano inventario storico e ZIP di backup non disponibili: non sostituiti con nuove baseline. Il controllo degli sconti esclude correttamente le percentuali `object-position` (15% è un crop, non una promozione).

Non è stato necessario installare dipendenze. Bundle principale: circa 75.9 KB gzip JS e 8.6 KB gzip CSS. Prima del commit: controllo fisico dei gesti, revisione del diff cumulativo e scelta consapevole degli screenshot da conservare. Nessuna azione Git di pubblicazione eseguita.
