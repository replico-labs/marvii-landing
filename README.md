# landing

The public landing page for `marvii.xyz`. Static: Vite builds it to `landing/dist`. It never calls WebAuthn; every passkey action happens on `wallet.marvii.xyz`.

Design source: Claude Design export "Marvii Landing", rebuilt as plain HTML and CSS without the design tool's React runtime. Fonts (Geist, Geist Mono) are bundled, so the page loads nothing from third parties.

```
pnpm dev:landing          # http://localhost:5174
pnpm --filter @marvii/landing build
```

## Running it on its own

The folder is self-contained (its own `tsconfig.json`, `.gitignore` and `pnpm-lock.yaml`), so it can be copied into its own repo:

```
pnpm install
pnpm dev      # http://localhost:5174
pnpm build    # output in dist/
```

## Vercel

- Framework preset: Vite
- Build command: `pnpm build`
- Output directory: `dist`
- Custom domain: `marvii.xyz` (add the A and CNAME records Vercel shows at your DNS provider)

Inside `marvii-dev` it's also a workspace package: `pnpm dev:landing` from the repo root.
