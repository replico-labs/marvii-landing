import { defineConfig } from "vite"

// The public landing page, served from marvii.xyz. It never calls WebAuthn:
// every passkey action happens on wallet.marvii.xyz (CLAUDE.md Section 1).
export default defineConfig({
    server: { host: "localhost", port: 5174, strictPort: true }
})
