# Design System Component Gallery

This project showcases a Shadcn/UI-powered component gallery built with Vite, React, and Tailwind CSS. It demonstrates foundational tokens, form patterns, navigation, and overlay experiences that align with the Shadcn design language.

## Getting started

```bash
npm install
npm run dev
```

- `npm run dev` starts the development server on [http://localhost:5173](http://localhost:5173).
- `npm run build` type-checks the project and produces a production build in `dist/`.
- `npm run preview` serves the production build locally.

## Project structure

- `src/App.tsx` – top-level component gallery page built with Shadcn UI primitives.
- `src/components/ui` – reusable Shadcn component implementations (button, card, tabs, etc.).
- `src/components/theme-toggle.tsx` – theme switcher that persists light/dark preference.
- `tailwind.config.ts` – Tailwind configuration with Shadcn tokens and animations.

## Theming

The gallery supports light and dark modes. The `ThemeToggle` component toggles the `dark` class on the root element and persists the preference in `localStorage`.
