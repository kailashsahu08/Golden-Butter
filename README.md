<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# The Golden Alchemy

Single-page React + Vite e-commerce demo.

## Quick links
- full documentation: [DOCUMENTATION.md](DOCUMENTATION.md)

## Run locally

**Prerequisites:** Node.js

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

## Build & preview

- `npm run build`
- `npm run preview`

## Project structure

- `src/components/` - UI components: `Footer`, `Navigation`, `ProductCard`
- `src/pages/` - pages: `CatalogPage`, `CheckoutPage`, `ProductDetailPage`, `ProfilePage`, `SuccessPage`
- `src/context/CartContext.tsx` - cart state provider
- `src/constants.ts`, `src/types.ts`, `src/App.tsx`, `src/main.tsx`, `src/index.css`

## Features

- Product catalog
- Product details
- Add/remove cart items, total price
- Checkout flow + success page
- Profile page (static)

## Notes

- Add products in `src/constants.ts`
- Add routes in `src/App.tsx`
- Cart state is in `src/context/CartContext.tsx`

