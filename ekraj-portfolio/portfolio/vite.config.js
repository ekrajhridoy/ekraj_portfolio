import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' makes the site work on GitHub Pages under /repo-name/ and anywhere else
export default defineConfig({ base: './', plugins: [react()] })
