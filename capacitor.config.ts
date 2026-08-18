import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'uk.lucahome.gktrainer',
  appName: 'GK Trainer',
  webDir: 'www',
  server: {
    url: 'https://goalkeeper-trainer-demo.pages.dev',
    cleartext: false,
    iosScheme: 'https',
    allowNavigation: [
      'goalkeeper-trainer-demo.pages.dev'
    ]
  }
};

export default config;
