# La Dimora dei Ricci — progetto sorgente

Versione del 19 settembre 2026. Progetto React + TypeScript + Vite, con generazione di HTML statico per la pubblicazione. Non richiede Supabase né credenziali o variabili d'ambiente.

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
```

Gli script immagini richiedono Python e Pillow. Non occorre eseguirli per avviare o compilare il sito: le immagini pronte sono incluse. Lo script storico `scripts/verify-site.py` confronta anche un archivio di backup esterno al progetto (`../la-dimora-backup-prima-2026-09-14.zip`), non incluso in questo ZIP; quel confronto richiede il backup originale. Non rigenerare l'inventario iniziale per sostituirlo.

## Pubblicazione

Solo dopo approvazione, carica su Netlify la cartella `dist/` generata dal build. Non caricare questo ZIP sorgente su Netlify Drop: contiene anche documenti interni e originali. È disponibile separatamente lo ZIP del sito compilato.

Prima del rilascio consulta `REPORT-AGGIORNAMENTO-2026-09-19.md` per le conferme ancora necessarie. Per modificare testi, contatti e immagini segui `GUIDA-MODIFICHE.md`.
