// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tagger from '@dhiwise/component-tagger';
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tagger(), flowbiteReact()],
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@pages': path.resolve('./src/pages'),
      '@assets': path.resolve('./src/assets'),
      '@constants': path.resolve('./src/constants'),
      '@styles': path.resolve('./src/styles'),
    },
  },
  server: {
    port: '4028',
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new'],
  },
});