# Alpin Portfolio

A responsive Next.js portfolio with TypeScript and SCSS modules. This refactor keeps the existing visual design and adopts the feature-based folder convention from the supplied `alpin.zip`.

## Run and validate

```sh
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

The home page is `/`. The `(home)` folder is a Next.js route group and does not appear in the URL. Run `npm run build` after moving routes to regenerate Next.js route types before running the standalone type check.

## Folder structure

```text
public/
├── default/                     # Reserved public images
└── homescreen/                  # Reserved icons
src/
├── app/
│   ├── (home)/
│   │   ├── page.tsx             # Route entry
│   │   └── modules/index.tsx    # Composes the six home sections
│   ├── not-found/
│   │   └── modules/index.tsx    # Composes the fallback
│   ├── not-found.tsx
│   ├── layout.tsx               # Document, metadata, shared stylesheet
│   └── template.tsx             # Header + MainSite + Footer
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── MainSite/index.tsx       # Semantic main-content wrapper
│   ├── HeroSection/
│   ├── AboutSection/
│   ├── Project/
│   │   ├── ProjectSection/
│   │   ├── ProjectItem/
│   │   └── dummyData/projectData.ts
│   ├── ExperienceSection/
│   ├── ToolboxSection/
│   ├── ContactSection/
│   ├── ContactForm/
│   ├── FallbackSection/
│   └── Elements/
│       ├── Button/
│       └── Wordmark/
├── _cores/
│   ├── assets/{fonts,image}/
│   ├── configs/profile/index.ts
│   ├── hooks/
│   ├── models/
│   ├── persists/
│   ├── states/
│   ├── styles/
│   │   ├── app.scss
│   │   ├── base/_reboot.scss
│   │   └── project/_default.scss
│   └── utils/
└── api/
    ├── endPoint/
    └── httpRequest/
```

### How this matches the archive

The four source roots, route-local `modules`, `MainSite`, `Elements`, nested feature grouping, and component-layer names follow the archive. `Project/ProjectSection`, `Project/ProjectItem`, and `Project/dummyData` apply the archive's `Example/ExampleSection`, `Example/ExampleItem`, and `Example/dummyData` pattern to real portfolio content. Despite the inherited `dummyData` folder name, project descriptions are the supplied real project information; only the artwork is conceptual.

This matches the architectural convention rather than duplicating every sample file. TypeScript `.tsx`/`.ts` files replace the archive's `.jsx`/`.js` files. `tsconfig.json` carries its alias convention instead of adding a conflicting `jsconfig.json`. Current Next.js and ESLint configuration files remain. Unused sample features, API implementations, fonts, assets, metadata, and repository setup instructions were not imported.

### Inside each component

```text
Feature/
├── models/                      # Data shapes and feature data
├── styles/style.module.scss     # Locally scoped presentation
├── states/                      # Interactive hooks when needed
├── views/index.tsx              # UI implementation
├── persists/                    # Reserved persistence layer
└── widgets/Default/index.tsx    # Public entry point
```

`FallbackSection` uses `widgets/NotFound`, matching the archive. `MainSite` is a direct wrapper, also matching the archive.

- **Views** render markup. ProjectItem accepts typed props so the grid reuses one card implementation. Button supports links and native buttons, and Wordmark is shared by Header and Footer.
- **Widgets** provide the feature's public import path. Static widgets re-export their views; a future data-backed widget can load a model before rendering the same view.
- **Models** contain ProjectItem types, timeline entries, and toolkit data. They can later hold data access logic as in the archive.
- **States** contain the Header menu hook and ContactForm email-draft hook. Those views are the only explicit client boundaries; page composition and static sections remain server components.
- **Persists** is reserved for feature persistence. No storage is needed today.
- Empty extension-point folders contain `.gitkeep` so the reference's layer structure survives version control without unnecessary runtime code.

### Styling and aliases

Global typography, colors, layout utilities, focus styles, and reduced-motion behavior live in `_cores/styles`. Feature styling and responsive rules live beside each view in SCSS modules. The shared Button owns its visual styling; `action-button` is a global styling hook for its form layout.

Imports use the archive's `@components/*`, `@elements/*`, `@styles/*`, `@configs/*`, and other `_cores` aliases. The `@api/*` alias points to `src/api`. The previous `@organisms`, `@molecules`, `@atoms`, and `@modules` aliases have been removed.

## Editing content

- Contact and social details: `src/_cores/configs/profile/index.ts`.
- Project cards: `src/components/Project/dummyData/projectData.ts`.
- Experience and education: `src/components/ExperienceSection/models/index.ts`.
- Toolkit: `src/components/ToolboxSection/models/index.ts`.
- Section order: `src/app/(home)/modules/index.tsx`.
- Section copy and markup: the relevant component's `views/index.tsx`.

The contact form validates required fields and email format, then opens a prefilled email draft through `mailto:`. It does not send mail itself. No backend or credentials are configured. `api/httpRequest` and `api/endPoint` are reserved for a future integration.

## Cleanup and checks

Removed the superseded `src/presentation`, `src/core`, `src/infrastructure`, and `src/styles` trees; the monolithic `app/portfolio.css`; and the old public starter assets. Removed unused animation, state-management, analytics, API-client, and theme dependencies from the manifest and lockfile. The lint command now runs ESLint directly, and builds no longer skip linting.

`tsconfig.tsbuildinfo` is TypeScript's generated incremental cache, not source code. It is already ignored by `.gitignore` and may be regenerated by type checking.

Production build, ESLint, and TypeScript checks pass. Generated HTML is checked for section anchors, project count, form semantics, and contact links. No browser-based visual or interaction check was available in this session.

## Shared SCSS configuration

Component styles now import `@import '_cores/styles/_assets.scss';` and use the shared color, typography, spacing, radius, shadow, breakpoint, and layout helpers. See [Panduan styling](src/_cores/styles/README.md) for configuration locations and examples. Global theme variables and local font declarations are emitted once through `app.scss`.
