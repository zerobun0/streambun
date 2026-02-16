import million from 'million/compiler';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';
import { VitePluginRadar } from 'vite-plugin-radar';

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
    VitePluginRadar({
      analytics: {
        id: process.env.VITE_GA_ID ?? '',
        config: {
          cookie_flags: 'SameSite=None;Secure',
        },
      },
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
