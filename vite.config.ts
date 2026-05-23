import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const basePath = process.env.BASE_PATH || '/CMRISE/';

export default defineConfig({
  plugins: [
    react({
      include: /\.[jt]sx?$/,
    }),
  ],
  base: basePath,
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
