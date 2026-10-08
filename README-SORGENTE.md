# La Dimora dei Ricci — progetto sorgente

Revisione del 27 settembre 2026. Progetto React + TypeScript + Vite, con generazione di HTML statico per la pubblicazione. Non richiede Supabase né credenziali o variabili d'ambiente.

## Avvio

Installa Node.js con npm, estrai lo ZIP e apri questa cartella in un editor, ad esempio VS Code. Dal terminale della cartella:

```sh
npm install
npm run build
npm run preview -- --host 127.0.0.1 --port 4177 --strictPort
```

Apri http://127.0.0.1:4177/ nel browser. Non aprire index.html con doppio clic. Se la porta è già occupata, usa 4178 nel comando e nell'indirizzo. Per fermare la preview premi Ctrl+C.

Per lavorare con aggiornamento automatico, usa `npm run dev` e apri l'indirizzo mostrato. La pagina Termini viene generata dal build: per verificare tutte le pagine nella versione finale usa build + preview.

## Contenuto

- `src/`: componenti, testi in tre lingue, stili e impostazioni.
- `public/`: immagini ottimizzate, icone, Privacy e file pubblici.
- `originals/`: fotografie originali conservate.
- `scripts/`: generazione HTML, elaborazione immagini e verifiche.
- `audit/`: inventario degli asset e risultati dei controlli.
- Configurazioni, dipendenze dichiarate e lockfile pnpm.
- Guide alle modifiche, crediti immagini e rapporti delle revisioni.

Sono esclusi `node_modules`, `dist`, cache e file di sistema: vengono ricreati installando le dipendenze ed eseguendo il build.

## Controlli

```sh
npm run typecheck
npm run lint
npm run build
python3 scripts/verify-site.py
```

Gli script immagini richiedono Python e Pillow. Non occorre eseguirli per avviare o compilare il sito: le immagini pronte sono incluse. `scripts/verify-site.py` controlla pagine, link interni, metadati, dati della struttura e PDF, salvando i risultati in `audit/verifica-finale.json`. Se mancano l'inventario storico o il backup esterno `../la-dimora-backup-prima-2026-09-14.zip`, segnala quei confronti come non eseguibili e continua le altre verifiche. Non rigenerare l'inventario iniziale per sostituirlo.

La guida HTML è disponibile su `/guida-santo-stefano-di-camastra/`. Per rigenerare il PDF italiano dagli stessi contenuti: esegui il build, poi `python3 scripts/generate-guide-pdf.py` con ReportLab disponibile, infine ripeti build e verifica. Il PDF già incluso non richiede Python per essere servito dal sito.

## Pubblicazione

Solo dopo approvazione, carica su Netlify la cartella `dist/` generata dal build. Non caricare questo ZIP sorgente su Netlify Drop: contiene anche documenti interni e originali. È disponibile separatamente lo ZIP del sito compilato.

Prima del rilascio consulta `REPORT-REVISIONE-2026-09-27.md` per le conferme ancora necessarie. Per modificare testi, contatti e immagini segui `GUIDA-MODIFICHE.md`.
