# READ FIRST: PlatypAI Website Architecture & Guidelines

Welcome to the PlatypAI Redesigned Website repository. This document serves as the master blueprint for the current state of the application. Please read this before making any modifications to ensure architectural and design consistency.

## 1. The Core Philosophy
This website is not just a digital brochure; it is a narrative tool designed to communicate PlatypAI’s **"Expert-in-the-Loop"** methodology. 
*   **Minimalistic Elegance:** The design relies on expansive white space, clean typography, and extremely subtle uses of brand colors (teal, pink, cyan). Do not introduce heavy, dark background blocks unless strictly necessary for high-contrast emphasis.
*   **Mindful Animation:** We use Framer Motion for scroll-linked animations and visual metaphors (e.g., the Hero section's "Raw Data to Scaled Output" animation). Animations should be purposeful and explain a concept, never just "flashy for the sake of being flashy."

## 2. Tech Stack & Environment
*   **Framework:** React 19 (Functional Components + Hooks)
*   **Build Tool:** Vite
*   **Language:** Strict TypeScript
*   **Styling:** Tailwind CSS
*   **Animation:** Framer Motion
*   **Icons:** Lucide React

### ⚠️ Critical Deployment Constraints (Coolify / Heroku Buildpacks)
*   **Strict TypeScript (`verbatimModuleSyntax`):** The Vite template enforces strict type imports. If you import a TypeScript type or interface, you **MUST** use `import type { TypeName } from ...` or `import { type TypeName } from ...`. Failing to do this will cause the VPS deployment build to fail.
*   **React Global:** JSX is handled automatically. Do NOT use `<React.Fragment>` unless you explicitly `import { Fragment } from 'react'` and use `<Fragment>`. Using unimported `React.` namespaces will crash the build.
*   **Production Server:** Vite produces static files in the `dist` folder. The `package.json` uses `"start": "serve -s dist"` to serve the application on the VPS. Ensure the `serve` dependency remains intact.

## 3. Project Structure
The application uses a **Long-Scrolling Architecture**, built sequentially in `App.tsx`.

*   `/src/data/siteContent.ts`: **The Source of Truth.** This file contains the entire taxonomy of PlatypAI's capabilities, including Categories, Nodes (capabilities), blurbs, AI amplification logic, and Case Studies. Always pull data from here rather than hardcoding it in UI components.
*   `/src/components/Navigation/Navbar.tsx`: Sticky top navigation with smooth-scroll anchor links.
*   `/src/components/Sections/`:
    *   `HeroSection.tsx`: Features the dynamic "Raw Data → Expert Filter → Scaled Structure" visual metaphor.
    *   `CorePhilosophy.tsx`: The 4 core principles and the comparative Methodology Table (AI-only vs Human vs Expert).
    *   `ArchitectureStack.tsx`: The interactive 5-step timeline (Business Need → Output Systems) revealing the "What AI Does vs What Experts Do" dynamic.
    *   `ServiceSystems.tsx`: Expandable glassmorphic cards for the 4 core systems (Learning, Knowledge, Workflow, Prototypes). Pulls deep-dive logic directly from `siteContent.ts`.
    *   `CaseStudies.tsx`: A grid dynamically rendering all `proofCases` found in the `siteContent` taxonomy.

## 4. Brand Guidelines
*   **Typography:** We strictly use **Poppins** for all text (headings and body). Comfortaa is deprecated.
*   **Color Palette (Tailwind Tokens):**
    *   `brand-navy`: `#0A192F` (Primary text color)
    *   `brand-teal`: `#00B4D8` (Primary accent/buttons)
    *   `brand-cyan`: `#90E0EF` (Subtle highlights)
    *   `brand-mist`: `#CAF0F8` (Backgrounds, borders, glassmorphic effects)
    *   `brand-pink`: `#FF4D6D` (High-contrast, sparse accents for "AI" themes)
    *   `brand-darkBg`: `#020C1B` (Reserved for deep contrast if ever needed, but generally avoided in favor of white)

## 5. Continuing Work
If you are picking up this repository for future updates:
1.  **To add a new capability or case study:** Simply update the JSON structures in `src/data/siteContent.ts`. The UI components (like ServiceSystems and CaseStudies) map over this data automatically.
2.  **To modify the layout:** Edit the specific section component in `src/components/Sections/`. Ensure any new sections maintain the `bg-white` baseline and use `framer-motion`'s `whileInView` for consistent scroll-fade entry animations.
3.  **Local Testing:** Run `npm run dev` for the dev server, but always run `npm run build` locally before pushing to GitHub to catch any strict TypeScript compilation errors before the VPS attempts to build it.
