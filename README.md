# 🌿 Paradise Nursery Shopping App

React + Vite single page application for browsing houseplants, managing a cart, and completing the peer-review assignment criteria. The project ships with Redux Toolkit for state management and polished, marketing-ready layouts across the landing, catalog, and cart experiences.

## Features

- Immersive landing page with sticky navigation, testimonial grid, and multi-section storytelling that showcases Paradise Nursery.
- Product catalog grouped by category, complete with trend highlights, filter chips, and Redux-powered add-to-cart interactions.
- Refined cart review flow featuring checkout timeline, perks sidebar, and responsive quantity controls with subtotal calculations.
- Redux Toolkit store configured with reusable selectors and actions for cart and product management.
- Vite-powered developer experience with ESLint and build scripts.

## Getting Started

```bash
# install dependencies
npm install

# launch the dev server
npm run dev

# produce a production build
npm run build

# optional: run the linter
npm run lint
```

The development server defaults to `http://localhost:5173`.

## Project Structure

- `src/App.jsx` – application router for landing, catalog, and cart pages.
- `src/pages/` – feature pages (`LandingPage`, `ProductListingPage`, `CartPage`).
- `src/components/` – reusable UI such as `Header`, `ProductCard`, and `CartItem`.
- `src/store/` – Redux Toolkit slices (`cartSlice`, `productsSlice`) with hooks and store configuration.
- `public/plants/` – vector artwork for hero and product imagery.

## Testing

Manual test scenarios are catalogued in `docs/testing-checklist.md`. Run through the checklist before submission and execute the commands below:

```bash
npm run lint
npm run build
```

Optional: run `npm run dev` and exercise the flows while observing Redux DevTools.
