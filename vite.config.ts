import { ConfigEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import path from 'path';

const CWD = process.cwd();

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    base: '/',

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    plugins: [react()],

    server: {
      host: true,
      port: 5173,
      cors: true,
      proxy: {
        '^/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
          secure: false,
        },
      },
      open: false,
    },
  };
};
