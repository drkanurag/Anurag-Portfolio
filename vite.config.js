import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'universal-entry-transform',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          return html
            .replace('<link rel="stylesheet" href="./public/dist-bundle/index.css" />', '')
            .replace(
              '<script src="./public/dist-bundle/portfolio-app.js"></script>',
              '<script type="module" src="/src/main.tsx"></script>'
            );
        },
      },
      closeBundle() {
        const builtJs = path.resolve('dist/assets/portfolio-app.js');
        const targetBundleDir = path.resolve('public/dist-bundle');
        if (fs.existsSync(builtJs)) {
          fs.mkdirSync(targetBundleDir, { recursive: true });
          fs.copyFileSync(builtJs, path.join(targetBundleDir, 'portfolio-app.js'));
        }
        const distBundleDir = path.resolve('dist/public/dist-bundle');
        fs.mkdirSync(distBundleDir, { recursive: true });
        if (fs.existsSync(path.join(targetBundleDir, 'portfolio-app.js'))) {
          fs.copyFileSync(
            path.join(targetBundleDir, 'portfolio-app.js'),
            path.join(distBundleDir, 'portfolio-app.js')
          );
        }
        if (fs.existsSync(path.join(targetBundleDir, 'index.css'))) {
          fs.copyFileSync(
            path.join(targetBundleDir, 'index.css'),
            path.join(distBundleDir, 'index.css')
          );
        }
        if (fs.existsSync(path.resolve('public/favicon.ico'))) {
          fs.copyFileSync(
            path.resolve('public/favicon.ico'),
            path.resolve('dist/public/favicon.ico')
          );
        }
        const distAssetsDir = path.resolve('dist/src/assets');
        fs.mkdirSync(distAssetsDir, { recursive: true });
        if (fs.existsSync(path.resolve('src/assets/cv.pdf'))) {
          fs.copyFileSync(path.resolve('src/assets/cv.pdf'), path.join(distAssetsDir, 'cv.pdf'));
        }
        for (const htmlFile of ['index.html', 'launch.html', '404.html']) {
          if (fs.existsSync(path.resolve(htmlFile))) {
            fs.copyFileSync(path.resolve(htmlFile), path.resolve('dist', htmlFile));
          }
        }
      },
    },
    react(),
  ],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 250000,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        format: 'iife',
        name: 'AnuragPortfolioApp',
        entryFileNames: 'assets/portfolio-app.js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});



