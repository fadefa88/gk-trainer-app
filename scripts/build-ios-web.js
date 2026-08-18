const fs = require('fs');
const path = require('path');

const root = process.cwd();
const out = path.join(root, 'www');
const appUrl = 'https://goalkeeper-trainer-demo.pages.dev';

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const html = `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#07110b" />
  <title>GK Trainer</title>
  <style>
    :root { color-scheme: dark; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at top, #12351f 0, #07110b 42%, #020403 100%);
      color: #f3fff6;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      padding: 28px;
      text-align: center;
    }
    .card {
      width: min(420px, 100%);
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 28px;
      padding: 26px;
      background: rgba(7,17,11,.82);
      box-shadow: 0 24px 60px rgba(0,0,0,.35);
    }
    .logo {
      width: 74px;
      height: 74px;
      margin: 0 auto 18px;
      border-radius: 23px;
      display: grid;
      place-items: center;
      background: #20e06c;
      color: #001b0a;
      font-size: 32px;
      font-weight: 900;
    }
    h1 { margin: 0 0 8px; font-size: 28px; }
    p { margin: 0; color: rgba(243,255,246,.72); line-height: 1.45; }
    a {
      display: inline-flex;
      justify-content: center;
      margin-top: 18px;
      width: 100%;
      padding: 14px 16px;
      border-radius: 18px;
      background: #20e06c;
      color: #001b0a;
      text-decoration: none;
      font-weight: 900;
    }
  </style>
</head>
<body>
  <main class="card">
    <div class="logo">GK</div>
    <h1>GK Trainer</h1>
    <p>Caricamento dell'app allenamento portieri.</p>
    <a href="${appUrl}">Apri app</a>
  </main>
  <script>
    window.location.replace('${appUrl}');
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(out, 'index.html'), html, 'utf8');
console.log(`✅ iOS wrapper bundle ready in www/. Remote app: ${appUrl}`);
