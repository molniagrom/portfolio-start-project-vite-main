# Alina Groza Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=flat-square)](https://portfolio-start-project-vite-main.vercel.app/)

Production-focused portfolio built with React, TypeScript, Vite, and styled-components. Features smooth scroll animations, responsive design, and contact form via EmailJS.

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

## Contact form configuration

Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
`VITE_EMAILJS_PUBLIC_KEY` in `.env.local` for local development and in your hosting
provider's build environment for production. See `.env.example`. Rebuild after
changing these values. Without configuration the contact section offers direct
email and social links instead of a form that cannot send messages.

## Resume files

Only approved, up-to-date resume PDFs should be linked. Set the corresponding
`contactDetails.resumeUrls.en` and `.ru` values in `src/data/portfolioData.ts` after
adding the approved files to `public/`. A language without an approved PDF uses a
"Request resume" email link; it does not download an old or other-language CV.

The approved v3 Russian and English CVs are available in `public/` as
`ru_cv_alina-groza.pdf` and `en_cv_alina-groza.pdf`. Replace these files directly
with approved PDFs when updating the CVs; the language-specific download links
remain stable. `scripts/generate_resumes.py` is a historical content snapshot
and only exports to `output/pdf/legacy_snapshot/`; it does not update the website.
