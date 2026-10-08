# La Dimora dei Ricci — anteprima e pubblicazione

Configurazione verificata l’8 ottobre 2026: il progetto Netlify esistente `ladimoradeiriccisitoweb` è collegato a `edoardoricciardo99-cpu/B-B-la-dimora-dei-ricci`. Il dominio di produzione è `https://ladimoradeiricci.com`.

## Generare il sito

```bash
npm ci
npm run build
npm run preview -- --host 127.0.0.1 --port 4177 --strictPort
```

Apri http://127.0.0.1:4177/. Ferma il server con Ctrl+C nel terminale che lo esegue. Il build genera `dist/`, con HTML pre-renderizzato e interazioni React. La guida completa è in `GUIDA-MODIFICHE.md` e il report in `REPORT-REVISIONE-2026-09-16.md`.

## Pubblicare su Netlify

Lavora sul branch di sviluppo `dimora_ricci_0.2`, esegui typecheck, lint, build e `python3 scripts/verify-site.py`, poi salva e invia le modifiche a GitHub. Apri una Pull Request verso `main`: Netlify genera un’anteprima. Il merge su `main` avvia la pubblicazione automatica sul dominio, quindi va eseguito quando il rilascio è autorizzato.

Impostazioni del progetto esistente: base `/`, build `npm run build`, cartella pubblicata `dist`, branch di produzione `main`. Non occorre creare un nuovo progetto o cambiare dominio/DNS. Conservarne i record email.

`originals/` e `audit/` rimangono locali e sono esclusi da Git: conserva gli originali per gli aggiornamenti fotografici. Il sito viene compilato usando i WebP in `public/images/` e i metadati in `src/image-variants.json`. Il verificatore controlla gli originali quando l’archivio locale è disponibile; in un checkout pulito segnala il confronto non eseguibile.

In caso di caricamento manuale, carica esclusivamente `dist/` nella sezione Deploys del progetto già esistente, mai tutto il repository.

Il progetto è interamente statico: non richiede Supabase, variabili d'ambiente o un server applicativo.
