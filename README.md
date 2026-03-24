# Alina Groza Portfolio

Production-focused portfolio built with React, TypeScript, Vite, and styled-components.

## Stack

- React 18
- TypeScript
- Vite
- styled-components
- Framer Motion
- EmailJS

## Getting Started

```bash
pnpm install
pnpm dev
```

Open the local Vite URL shown in the terminal.

## Available Scripts

- `pnpm dev` starts the development server.
- `pnpm build` runs TypeScript checks and creates the production bundle.
- `pnpm preview` serves the production bundle locally.
- `pnpm lint` runs ESLint.
- `pnpm test` runs Vitest in watch mode.
- `pnpm test:run` runs the test suite once.

## Project Structure

- `src/layout/` page sections such as header, hero, projects, about, testimony, and contact.
- `src/components/` reusable UI pieces.
- `src/data/portfolioData.ts` portfolio content, social links, and project metadata.
- `src/styles/` theme tokens and global styles.
- `src/utils/` shared utilities such as date helpers.
- `public/` static assets served as-is.

## Deployment Notes

The Vite `base` is configured for root deployment. If you deploy under a subpath, update `vite.config.ts` and keep deployment settings aligned.

## Known Follow-ups

- Replace placeholder local project images with optimized WebP assets.
- Move EmailJS values to environment variables before public deployment.
- Install the new test dependencies before running the added Vitest smoke tests.
