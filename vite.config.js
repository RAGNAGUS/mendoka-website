/* eslint-env node */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const showLanternHearth = process.env.SHOW_LANTERN_HEARTH === '1'

// https://vitejs.dev/config/
export default defineConfig({
  // Set SHOW_LANTERN_HEARTH=1 when building (or running dev) to include the unannounced Lantern Hearth.
  // Off by default: "@unreleased/lantern-hearth" then resolves to an empty stand-in, so the build
  // contains nothing about the game — no text, no links, no images.
  define: {
    __SHOW_LANTERN_HEARTH__: JSON.stringify(showLanternHearth),
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@unreleased/lantern-hearth': fileURLToPath(
        new URL(showLanternHearth ? './src/unreleased/lanternHearth.js' : './src/unreleased/off.js', import.meta.url),
      ),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
