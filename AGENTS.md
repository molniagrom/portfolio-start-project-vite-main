# Repository Guidelines

## Project Structure & Module Organization
This is a Vite + React + TypeScript single-page portfolio app. Source code lives in `src/`.
- `src/main.tsx`: app bootstrap.
- `src/App.tsx`: top-level page composition.
- `src/layout/`: page sections such as header, footer, and content blocks.
- `src/components/`: shared UI primitives such as buttons, icons, menus, and wrappers.
- `src/styles/`: global styles, theme values, and slider CSS.
- `src/image/` and `public/`: bundled images, SVGs, and static assets.

There is currently no `tests/` directory. If tests are added, place them next to the component as `*.test.tsx` or under `src/__tests__/`.

## Build, Test, and Development Commands
Use `pnpm` for all local work.
- `pnpm dev`: start the Vite dev server.
- `pnpm build`: run TypeScript compile checks and create a production build in `dist/`.
- `pnpm preview`: serve the production build locally.
- `pnpm lint`: run ESLint across the repository.
- `pnpm deploy`: publish `dist/` via GitHub Pages after a successful build.

## Coding Style & Naming Conventions
Follow the existing codebase style:
- TypeScript + React function components only.
- Use 4-space indentation and semicolons.
- Component files use `PascalCase.tsx`; utility/style files may use existing local patterns such as `Theme.ts` or `Contact.Styled.tsx`.
- Prefer named exports for components unless the file already uses a default export.
- Keep styled-components close to the component that owns them.

Linting is handled by `eslint.config.js` with `typescript-eslint`, `react-hooks`, and `react-refresh`.

## Testing Guidelines
No test runner is configured yet. Minimum expectation for new test setup: add component and interaction coverage for navigation, project filtering, and contact form submission states. Recommended stack: Vitest + Testing Library. Name files `ComponentName.test.tsx`.

Before opening a PR, run at least:
- `pnpm lint`
- `pnpm build`

## Commit & Pull Request Guidelines
Recent commits use inconsistent messages such as `refactoring` and `I fixed bag`; do not continue that pattern. Use short imperative commits, for example:
- `feat: add contact form validation`
- `fix: clean up scroll listener in go-top button`

PRs should include a clear summary, affected screens/components, linked issue if available, and screenshots or short recordings for UI changes. Note any config, deploy, or asset-path changes explicitly.

## Security & Configuration Tips
Do not hardcode production secrets in components. Client-visible values such as EmailJS keys should be moved to environment variables before release. Keep Vite `base` and deploy settings aligned when changing hosting targets.
