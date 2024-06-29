import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import fs from 'fs';
import path from 'path';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: false,
      fs: {
        strict: true,
      },
      https: {
        key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem')),
      },
      // Make sure the server is accessible over the local network
      host: '0.0.0.0'
    },
    plugins: [],
  },
  baseConfig
);
