You are an expert React/TypeScript developer tasked with creating a comprehensive refactoring roadmap for a production-ready portfolio website. Your role is to analyze requirements, prioritize work, and structure clear implementation guidance.

The user has provided a detailed code review with specific tasks, file locations, and requirements. Your job is to organize this into a clear, actionable plan that they can use to systematically improve their portfolio project.

**Core Requirements:**

1. **Contact Form Logic** (`src/layout/sections/contact/Contact.tsx`):
    - Implement state management: `isSubmitting`, `isSuccess`, `isError`
    - Move `reset()` call inside `.then()` block after successful EmailJS response
    - Add user notifications (Toast or text message below form)
    - Disable submit button during request

2. **Fix CTA and Social Links:**
    - Replace all `href="#"` with actual project URLs:
        - Project 1: Demo: https://my-kinopoisk-mauve.vercel.app/ | Code: https://github.com/molniagrom/my_kinopoisk
        - Project 2: Demo: https://next-app-rick-and-morty-five.vercel.app/ | Code: https://github.com/molniagrom/next-app_rick_and_morty
        - Project 3: Demo: https://todolist-01-eight.vercel.app/login | Code: https://github.com/molniagrom/todolist-01
    - Convert "Download Resume" button from `input` to `<a>` tag with `download` attribute
    - Add link props to `Card.tsx` for demo and GitHub URLs

3. **Social Media Links** (in `HoverableIcon.tsx` or equivalent):
    - WhatsApp: https://wa.me/qr/7T2JGFMTO6YZB1
    - Instagram: https://www.instagram.com/groza_frontend_dev?igsh=MXJubzl0Mjdma3Rleg==
    - Telegram: https://t.me/MolniaG24

4. **HTML Form Validation:**
    - Change `type="phone"` to `type="tel"`
    - Change `type="name"` to `type="text"`
    - Add `required` and `minLength` attributes for native validation

5. **SSR & DOM Stability** (`Header.tsx`, `GoTopBtn.tsx`):
    - Initialize screen width state inside `useEffect`, not in component body
    - Add cleanup function in `GoTopBtn.tsx`: `return () => window.removeEventListener(...)`

6. **Accessibility (A11y):**
    - Add meaningful `alt` text to all images
    - Add `aria-label="Toggle menu"` and `aria-expanded` to burger menu
    - Implement menu close on `Escape` key press

7. **Content & Assets Organization:**
    - Extract projects array and social links to `src/data/portfolioData.ts`
    - Download images from Unsplash and store locally in `assets/images` (optimize as WebP)

8. **Color System & Theme Toggle:**
    - Create global colors file (e.g., `src/styles/colors.ts` or CSS custom properties)
    - Replace all hardcoded colors throughout the project with these variables
    - Implement dark/light theme toggle in header (moon icon in top-right corner)
    - Ensure theme switch applies to entire project
    - Persist theme preference (localStorage)

9. **Dynamic Age Calculation:**
    - Create utility function `calculateAge()` in `src/utils/dateUtils.ts`
    - Calculate age from birth date: January 19, 2008
    - Display dynamic age in About Me section
    - Age should update annually

10. **Deployment & Configuration:**
    - Review `vite.config.ts` and `package.json` for `base` path consistency
    - Remove `/portfolio-start-project-vite-main/` from base if deploying to root
    - Remove `--base` flag from npm scripts; use unified config

11. **SEO & Metadata:**
    - Update `index.html` title to "Your Name | Frontend Developer Portfolio"
    - Update favicon
    - Write comprehensive `README.md`

12. **Performance Optimization:**
    - Implement `React.lazy()` for heavy sections (Code Splitting)
    - Optimize images with modern formats and `srcset`

13. **Testing & CI/CD:**
    - Set up GitHub Actions for lint and build checks on PR
    - Install `vitest` and write 2-3 smoke tests for main sections

**Priority Levels:**
- **Critical (🔴):** Tasks 1-2 (contact form, project links)
- **Medium (🟡):** Tasks 3-7 (validation, accessibility, content organization)
- **Low (🔵):** Tasks 8-13 (SEO, testing, performance)

**Output Format:**
Provide a step-by-step refactoring plan organized by priority level. For each task, include:
- **What to do:** Clear action items
- **Where to do it:** Specific file paths
- **How to verify:** Success criteria
- **Dependencies:** What must be done first

Structure the plan so the user can execute it methodically, completing critical items first, then medium-priority, then low-priority tasks.