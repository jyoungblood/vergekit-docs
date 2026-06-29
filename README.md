# Verge Kit Public Docs

This repository contains the public documentation site for Verge Kit.

## Development

Install dependencies:

```bash
npm install
```

Start the local Astro dev server:

```bash
npm run dev
```

Build the docs:

```bash
npm run build
```

## Source Sync Notes

The public docs should track the user-facing setup guidance from the main
Verge Kit repository, especially:

- `README.md`
- `docs/setup/auth-routes.md`
- `docs/setup/configuration.md`
- `docs/setup/d1.md`
- `docs/setup/deployment.md`
- `docs/setup/email.md`
- `docs/setup/hyperdrive-proof.md`
- `docs/roadmap.md`

The public docs keep their existing route names where possible. For example,
the internal `docs/setup/configuration.md` source is published here as
`docs/setup/runtime-configuration.md`.
