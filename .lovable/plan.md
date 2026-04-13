

## Simbaco.no — Build Plan

### Assets
Copy 3 files into `public/`:
- `user-uploads://Wordpress_Transparent.png` → `public/logo.png`
- `user-uploads://Favicon_Transparent.ico` → `public/favicon.ico`
- `user-uploads://Transparent_Logo.svg` → `public/logo.svg`

### Changes

**`index.html`** — Add favicon link, update title to "Simbaco AS"

**`src/pages/Index.tsx`** — Full rewrite with these sections:
1. **Header** — Sticky, logo.svg + "SIMBACO" text, scroll links
2. **Hero** — "IT Management & Sourcing Consultancy", subtitle "Open, honest and effective collaboration", Oslo badge
3. **About** — 20+ years experience in IT management and sourcing. Led operations and vendor management at Orkla, Cognite, Telenor. Currently supporting Aker Solutions and Omny Security.
4. **Services** — 7 cards in responsive grid: IT Cost Optimization, Procurement & Negotiations, Vendor Management, IT Strategy & Digitalization, Outsourcing & Transformation, IT Operation Process Design, Offshore Agreements
5. **Footer** — Simbaco AS, Org.nr 930 277 851, Furulundsveien 7c, 0282 Oslo, LinkedIn link

### Design
- White background, light gray (#f9f9f9) alternating sections
- Gold accent (#C5A55A) for borders, hover states, decorative elements
- Dark text (#1a1a1a), Inter font
- Fully responsive — mobile-first (393px viewport)
- Clean, Scandinavian minimalist aesthetic

