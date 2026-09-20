# La Dimora dei Ricci — preview prima della pubblicazione

**Stato: revisione locale. Non pubblicare senza approvazione.**

## Generare il sito

```bash
npm install
npm run build
npm run preview -- --host 127.0.0.1 --port 4177 --strictPort
```

Apri http://127.0.0.1:4177/. Ferma il server con Ctrl+C nel terminale che lo esegue. Il build genera `dist/`, con HTML pre-renderizzato e interazioni React. La guida completa è in `GUIDA-MODIFICHE.md` e il report in `REPORT-REVISIONE-2026-09-16.md`.

## Pubblicare su Netlify — solo dopo approvazione

Mantieni il progetto Netlify esistente e carica solo `dist/`, non tutto il progetto. Prima verifica il dominio principale, HTTPS e redirect. Collegare il dominio è un passaggio distinto dalla pubblicazione; preserva i record email. Nessun deploy o modifica DNS è stato effettuato in questa revisione.

Il progetto è interamente statico: non richiede Supabase, variabili d'ambiente o un server applicativo.
