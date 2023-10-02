import { defineConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react'
import resolve from '@rollup/plugin-node-resolve'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactPlugin(),
    resolve()
  ],
  root: "_build/default/src/output/src",
})
