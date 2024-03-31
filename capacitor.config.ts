import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.purechoice',
  appName: 'purechoice',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
