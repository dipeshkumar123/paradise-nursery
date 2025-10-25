# 🌿 Paradise Nursery Shopping App

React + Vite single page application for browsing houseplants, managing a cart, and completing the peer-review assignment criteria. The project ships with Redux Toolkit for state management and production-ready pages for landing, catalog, and cart experiences.

## Features

- Landing hero with CTA that routes into the catalog experience.
- Product catalog grouped by category with six curated plants and Redux-powered cart toggles.
- Shopping cart page featuring quantity controls, subtotal calculations, and checkout placeholder messaging.
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

## GitHub Repository Checklist (Plan Step 1)

1. Create a **public** repository named `paradise-nursery-app` (GitHub → New repository).
2. Initialize the repo locally:
	```bash
	git init
	git add .
	git commit -m "chore: bootstrap react + redux project"
	git branch -M main
	git remote add origin https://github.com/<your-username>/paradise-nursery-app.git
	git push -u origin main
	```
3. Push early, push often—commit at meaningful milestones as you work through the plan.

## Testing

Manual test scenarios are catalogued in `docs/testing-checklist.md`. Run through the checklist before submission and execute the commands below:

```bash
npm run lint
npm run build
```

Optional: run `npm run dev` and exercise the flows while observing Redux DevTools.

## Deployment

Pick any static hosting provider compatible with Vite builds:

1. `npm run build`
2. Deploy the `dist/` folder to Netlify, Vercel, GitHub Pages, or Azure Static Web Apps.
3. Verify that routing works by refreshing `/products` and `/cart` on the live site (configure rewrite rules if needed).

## Submission Checklist

- [ ] All manual tests from `docs/testing-checklist.md` pass.
- [ ] `npm run lint` and `npm run build` succeed without warnings.
- [ ] Live deployment URL captured.
- [ ] Public GitHub repository URL captured.
- [ ] Both links submitted to Coursera per the peer-review instructions.
