import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "jowosherver.pufferfish-kitchen.ts.net",
      "jjlelipaly.nl"
    ]
  }
})
