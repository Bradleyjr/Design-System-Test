# Design-System-Test

A static showcase of SaaS UI/UX patterns organized using the atomic design methodology. The library highlights atoms, molecules, organisms, templates, and page-level experiences.

## Getting started

Open `index.html` in any modern browser to explore the full design system. Use the **Toggle Theme** button to preview the components in both light and dark modes. Each pattern card also exposes **Preview** and **Markup** tabs so you can inspect the rendered UI alongside the generated HTML snippet.

If you just want a quick, opinionated glimpse of the experience, open `preview.html`. It stitches together a hero, onboarding cards, live metrics, and a pipeline table so stakeholders can see the look and feel instantly.

## Structure

- `index.html` – markup for every pattern example grouped by atomic design tiers.
- `preview.html` – a curated SaaS screen that blends key components into a single preview page.
- `styles.css` – visual language including typography, color tokens, layout utilities, and component styling.
- `theme.js` – handles the light/dark mode toggle and persists the preference in `localStorage`.

Customize or extend the sections to add new patterns as your SaaS product evolves.
