# 🌿 Paradise Nursery Shopping App

React + Vite single page application for browsing houseplants, managing a cart, and completing the peer-review assignment criteria. The project ships with Redux Toolkit for state management and a clean UI scaffold that we will expand in later steps.

## Features

- Vite-powered React application with lightning-fast reloads.
- Redux Toolkit store configured with cart and product slices.
- Project shell outlining the landing page and catalog tasks.
- Opinionated styling baseline tailored for a nursery-themed experience.

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

- `src/App.jsx` – entry screen placeholder and upcoming work outline.
- `src/store/` – Redux Toolkit slices for products and shopping cart, plus the configured store.
- `public/plants/` – reserved for future product imagery assets.

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

## Next Steps

- Flesh out the landing page hero with imagery, copy, and CTA.
- Build the product listing UI grouped by categories.
- Implement cart interactions and navigation using the configured Redux store.
