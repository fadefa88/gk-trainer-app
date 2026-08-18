# GK Trainer iOS Wrapper

Wrapper iOS Capacitor per pubblicare GK Trainer su App Store senza modificare il repo principale.

## Repo coinvolti

- `fadefa88/goalkeeper-trainer-demo`: web app reale su Cloudflare Pages + D1.
- `fadefa88/gk-trainer-app`: wrapper iOS Capacitor + Codemagic.

## Configurazione

- App name: `GK Trainer`
- Bundle ID: `uk.lucahome.gktrainer`
- Remote app URL: `https://goalkeeper-trainer-demo.pages.dev`
- Codemagic integration: `Luca De Fassi`

## Build Codemagic

1. Codemagic > Add application.
2. Seleziona GitHub repo `fadefa88/gk-trainer-app`.
3. Usa il workflow da `codemagic.yaml`.
4. Start new build su branch `main`.
5. Al termine scarica l'IPA o usa l'upload App Store Connect configurato.

## Note

Questo repo non contiene backend e non contiene i dati. La web app e il database restano su Cloudflare nel repo principale.
