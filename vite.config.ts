import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import mkcert from 'vite-plugin-mkcert';
import WindiCSS from 'vite-plugin-windicss';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    mkcert({
      source: 'coding',
    }),
    WindiCSS(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          'react-dom': ['react-dom'],
        },
      },
    },
  },
});
