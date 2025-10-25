# Manual Testing Checklist

Run the following scenarios before submission to ensure the peer review rubric requirements are met.

## Landing Page
- [ ] Background hero renders with overlay and copy visible on desktop and mobile viewports.
- [ ] "Get Started" button routes to the product listing at `/products`.

## Product Listing Page
- [ ] Six unique products are displayed with image, name, price, and category grouping.
- [ ] "Add to Cart" button adds the plant, increments the cart badge, and disables itself.
- [ ] Revisit page after navigating away; items already in the cart stay disabled (Redux state persists).

## Cart Page
- [ ] Header shows the current cart count on every route.
- [ ] Cart summary displays total number of plants and total price with currency formatting.
- [ ] Increment (`+`) raises item quantity and updates totals; decrement (`−`) lowers quantity or removes item at zero.
- [ ] Remove action deletes the plant from the cart and updates totals.
- [ ] Checkout button displays the "Coming Soon" message without errors.
- [ ] Continue Shopping button routes back to `/products`.
- [ ] Empty cart state shows message and CTA when all items are removed.

## Redux State
- [ ] Inspect Redux DevTools (if installed) to confirm cart actions dispatch correctly.

## Build & Lint
- [ ] `npm run build`
- [ ] `npm run lint`

Record any defects discovered and resolve before deploying.
