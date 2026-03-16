# The Golden Alchemy - Documentation

## Project overview
- React + Vite single-page e-commerce demo
- Product catalog, product page, checkout flow, profile, success page
- Cart state in `src/context/CartContext.tsx`

## Structure
- `src/components/`: reusable UI components (Footer, Navigation, ProductCard)
- `src/pages/`: app screens (CatalogPage, CheckoutPage, ProductDetailPage, ProfilePage, SuccessPage)
- `src/constants.ts`: product list and constants
- `src/types.ts`: TypeScript data type definitions
- `src/App.tsx`: routes + app layout
- `src/main.tsx`: mount React app
- `src/index.css`: global styles

## Run locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

## Build / Deploy
- `npm run build`
- `npm run preview`
- Use Vercel/Netlify/GitHub Pages for hosting

## Core features
- Catalog listing
- Product details & add to cart
- Cart management (add/remove/clear)
- Checkout & order success
- Profile page (static)

## Extending the app
- Add products in `src/constants.ts`
- Add new page route in `src/App.tsx`
- Persist cart via `localStorage` in `CartContext`
- Connect to backend APIs
