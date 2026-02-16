import million from 'million/compiler';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [
    million.vite({ auto: true, mute: true }),
    react({
      babel: {
        presets: [
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            },
          ],
        ],
      },
    }),
    checker({
      typescript: true,
    }),
  ],

  build: {
    sourcemap: mode === 'development',
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
