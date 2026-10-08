# Revisione del 3 ottobre 2026

Repository: B-B-la-dimora-dei-ricci. Branch: dimora_ricci_0.2.
Le modifiche precedenti sono state conservate. Nessun commit, push, merge o deploy.

## Modifiche

- Tre card iniziali uniformate: fondo crema della sezione camere (#f4efe7), testo scuro e icone bordeaux.
- Due slider fotografici semplici: quattro foto della Dimora e due del territorio, solo pallini centrati sulla fotografia. Rimossi didascalie, contatore, frecce e play. Rotazione ogni 7,5 secondi; pausa con hover, focus, interazione touch, scheda nascosta o slider fuori vista. Rotazione e transizioni disattivate con prefers-reduced-motion. Restano pallini cliccabili, tastiera e swipe.
- Parallax mobile più evidente: zoom 1,08 e spostamento massimo 52 px, usando il sistema esistente.
- Aggiunti Tri Quarti e Na Gazzusa, Creperia & More e Caffè Belvedere al blocco Dove mangiare; mantenuti Chi Ciauru e Bar Da Franco. Indirizzi, descrizioni brevi, percorsi Maps e fonti pubbliche; nessun nuovo prezzo, orario o tempo a piedi.
- Quattro stagioni completate in italiano, inglese e tedesco: due paragrafi per stagione e link di approfondimento. Su mobile i dettagli si aprono singolarmente; da 900 px partono aperti in due colonne.
- Dintorni numerati 01–07, inclusi Tusa/Halaesa, costa e Letto Santo. Mistretta e Valle delle Cascate integrate nel blocco Nebrodi della homepage, conservando il contenuto dedicato nella guida.
- La freccia dei percorsi resta insieme all’ultima parola, evitando una riga con il solo simbolo.

## File interessati da questa rifinitura e dalla modifica slider ripresa

src/App.tsx, src/StayBenefits.tsx, src/GuestInformation.tsx, src/local-info.ts,
src/visit-content.ts, src/SeasonsSection.tsx, src/index.css, src/TravelEstimates.tsx,
src/PhotoSlider.tsx, src/WelcomeGallery.tsx, src/site-settings.ts.
Questo report e le prove visive si trovano in audit/revisione-2026-10-03/.
Gli output dist/ e .prerender/ sono stati rigenerati dalla build, senza modifiche manuali.
Nessuna nuova dipendenza o modifica alle fotografie.

## Fonti consultate

- Creperia & More: menu del locale, indirizzo Via Vittoria 59 e offerta di crêpes/pizza: https://www.leggimenu.it/menu/7hpkfeqq7hp2
- Tri Quarti e Na Gazzusa: indirizzo Via Umberto I 27 nella scheda pubblica: https://www.tripadvisor.com/Restaurant_Review-g968422-d8664684-Reviews-Tri_Quarti_e_Na_Gazzusa-Santo_Stefano_di_Camastra_Province_of_Messina_Sicily.html ; conferma anche nell’elenco Virgilio collegato alla scheda Caffè Belvedere.
- Caffè Belvedere: Via Umberto I 15, categoria pasticceria: https://aziende.virgilio.it/ristoranti/santo-stefano-di-camastra-me/caffe-belvedere ; bar confermato anche da Tripadvisor.
- Cascate di Mistretta: fonte del Parco su Parks.it: https://www.parks.it/parco.nebrodi/pun_dettaglio.php?id_pun=4436 e Comune: https://www.comune.mistretta.me.it/Luoghi?ID=424
- La fonte del Parco distingue le cascate della fascia occidentale da alcuni salti esterni al perimetro: il testo non presenta tutta la Valle come interna al Parco.
- Buongiorno Ceramica: https://www.buongiornoceramica.it/home/buongiorno-ceramica/citta/
- Mantenuti i link esistenti a Museo della Ceramica, Parco dei Nebrodi, Granfondo, Oktoberfest e calendario del Comune. Nessuna data futura è stata promessa.

## Verifiche

- npm run typecheck: PASS.
- npm run lint: PASS.
- npm run build: PASS.
- python3 scripts/verify-site.py: PASS, nessun errore; 53 riferimenti locali e quattro pagine controllati.
- git diff --check: PASS.
- Browser Chrome: card controllate a 360, 390, 430, 600, 768, 1024 e 1440 px; nessun overflow orizzontale rilevato.
- Controllo visivo mobile: hero, slider, locali, dintorni numerati e primavera aperta. Controllo desktop: card e tutte e quattro le stagioni aperte.
- Colori delle tre card identici, verificati nel browser; icone bordeaux. Parallax mobile rilevato con scala 1,08 e traslazione 52 px.
- Slider: quattro/due fotografie e quattro/due soli controlli; rotazione automatica osservata in entrambi. Contenuti nuovi presenti anche in inglese e tedesco.
- Console browser: nessun errore o avviso rilevato durante i controlli.

## Limiti e controlli prima del commit

Lo script segnala due avvisi: inventario storico e backup ZIP non disponibili per il confronto degli asset. Non sono errori della build.
Aperture, disponibilità ed eventi vanno consultati presso i locali/organizzatori. Non sono stati verificati nuovi tempi a piedi o schede Business Maps univoche per i tre locali: sono forniti percorsi verso indirizzi verificati e fonti pubbliche.
Le prove responsive sono state svolte in Chrome con viewport simulati; resta utile un controllo su un telefono reale, soprattutto swipe e parallax.
Prima del commit, esaminare l’intero insieme delle modifiche locali: include anche le revisioni precedenti.
