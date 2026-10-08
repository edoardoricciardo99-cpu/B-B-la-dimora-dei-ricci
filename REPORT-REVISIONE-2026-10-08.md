# Revisione finale — 8 ottobre 2026

Repository: `B-B-la-dimora-dei-ricci`. Branch: `dimora_ricci_0.2`.
Le modifiche locali delle revisioni precedenti sono state conservate. Nessun commit, push, merge o deploy eseguito.

## Modifiche di questa revisione

- `src/index.css`: velatura fotografica conclusiva neutra nera, accenti bianchi e punto focale spostato sulla via. Zoom 1,22 su smartphone e 1,18 da 768 px; parallax esistente conservato. Con movimento ridotto resta la variante statica 1,08.
- `src/DestinationMedia.tsx`: rimosso il riquadro rosso sostitutivo delle fotografie mancanti. Le fotografie e relative attribuzioni delle altre destinazioni rimangono invariate.
- `src/App.tsx`: eliminata la proprietà del componente usata esclusivamente per il vecchio riquadro. Il Letto Santo conserva titolo, numero, testo e link ufficiale; su desktop il testo mantiene la stessa colonna delle altre destinazioni.

## Foto del Letto Santo: ancora da completare

Non è stata inserita una fotografia nuova. Sono state consultate fonti comunali, FAI, Wikimedia Commons e Openverse, senza individuare una foto pertinente con riutilizzo commerciale verificato.

La [pagina turistica comunale](https://santostefanodicamastra.comune.digital/visit-santo-stefano/c/0/i/8780876/santuario-letto-santo) mostra una fotografia, ma le [note legali del Comune](https://comune.santostefanodicamastra.me.it/note-legali/) indicano CC BY-NC 2.5 per le immagini e una diversa licenza generale per dati e documenti. Non è quindi confermata l'autorizzazione per il sito commerciale del B&B. Per completare il punto occorre uno scatto proprio oppure il permesso del titolare dei diritti.

## Verifiche

| Controllo | Esito |
| --- | --- |
| `npm run typecheck` | Passato |
| `npm run lint` | Passato |
| `npm run build` | Passato, frontend e prerender |
| `python3 scripts/verify-site.py` | Passato, nessun errore |
| `git diff --check` | Passato |

Il verificatore segnala soltanto l'assenza dell'inventario e del backup ZIP storici, che limita il confronto con quelle copie. Ha controllato quattro route, 72 riferimenti locali, 13 FAQ e 15 voci della guida predisposta.

Controllo visivo della sezione finale a 360, 390, 430, 600, 768, 1024 e 1440 px: nessuno scorrimento orizzontale rilevato. Immagine centrata maggiormente sulla via, testo e CTA leggibili, due contatti presenti. Verificati inoltre hero, camere, menu mobile, voce Letto Santo e apertura della FAQ sugli orari a 390 px. Nessuna immagine presente nel DOM risultava priva dell'attributo alt o caricata con errore.

Schermate: `audit/revisione-2026-10-08/`. Anteprima locale: http://127.0.0.1:4178/.

## Pubblicare su GitHub e aggiornare il sito

Il repository remoto è [edoardoricciardo99-cpu/B-B-la-dimora-dei-ricci](https://github.com/edoardoricciardo99-cpu/B-B-la-dimora-dei-ricci). La documentazione locale descrive un progetto Netlify esistente con caricamento manuale: dai file non è possibile sapere se sia stato successivamente collegato a GitHub, né quale sia il branch di produzione.

1. Apri il repository in **GitHub Desktop** e verifica che il branch sia **dimora_ricci_0.2**. Controlla tutte le modifiche, comprese le revisioni precedenti ancora non salvate su GitHub.
2. Seleziona sorgenti, componenti nuovi, configurazione, script e asset pubblicati necessari. Includi tutti i nuovi WebP in `public/images/` e `src/image-variants.json`, metadati generati necessari al sito. Escludi `originals/`, `audit/`, archivi fotografici e file locali non pertinenti. `dist/`, `.prerender/` e `node_modules/` sono già ignorati: non forzarne l'aggiunta. I report possono restare locali o essere inclusi come documentazione, a tua scelta.
3. Inserisci un messaggio, per esempio **Rifinitura sito, fotografie e prenotazione diretta 8%**, premi **Commit to dimora_ricci_0.2** e poi **Push origin** o **Publish branch**. Questo salva il lavoro su GitHub.
4. Nel progetto **Netlify esistente**, controlla il repository collegato e il branch di produzione in **Project configuration → Developer settings → Continuous deployment → Branches and deploy contexts**. Per questo repository il comando di build è **npm run build**, la cartella pubblicata **dist** e la cartella base è la radice del repository. Il nome della cartella contenitore locale non va aggiunto come base directory.
5. Se il progetto è collegato a GitHub, apri una Pull Request dal branch di sviluppo al branch di produzione effettivo (verso `main` solo se quello è configurato). Controlla l'anteprima se disponibile; quando decidi di pubblicare, esegui personalmente il merge e verifica il deploy riuscito su Netlify. Se il progetto usa ancora caricamento manuale, il push non aggiorna il dominio: genera la build e carica **solo `dist/`** nella sezione Deploys del progetto Netlify esistente.

La pubblicazione automatica richiede deploy abilitati e produzione non bloccata. Non creare un progetto Netlify nuovo e non cambiare dominio o DNS per questo aggiornamento. Dopo la pubblicazione verifica il dominio live da smartphone, lo sconto 8%, i due contatti e la sezione finale.

Riferimento: [documentazione ufficiale Netlify sui deploy e branch di produzione](https://docs.netlify.com/deploy/deploy-overview/).
