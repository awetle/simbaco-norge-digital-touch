

## Simbaco.no — Build Plan

### Assets to copy into project
- `user-uploads://Wordpress_Transparent.png` → `public/logo.png` (main logo, transparent background)
- `user-uploads://Favicon_Transparent.ico` → `public/favicon.ico` (browser tab icon)
- `user-uploads://Transparent_Logo.svg` → `public/logo.svg` (SVG version for crisp rendering)

### Page structure (single page: `src/pages/Index.tsx`)

1. **Header** — Lion logo + "SIMBACO" text, sticky, minimal
2. **Hero** — "IT Management & Sourcing Consultancy" / "Open, honest and effective collaboration" / Oslo badge
3. **About** — 20+ years experience, led IT operations and vendor management at Orkla, Cognite, Telenor. Currently supporting Aker Solutions and Omny Security. Strengths: IT operations leadership, procurement, vendor management, scalable IT landscapes.
4. **Services** — Card grid: IT Cost Optimization, Procurement & Negotiations, Vendor Management, IT Strategy & Digitalization, Outsourcing & Transformation, IT Operation Process Design, Offshore Agreements
5. **Experience** — Notable companies worked with: Telenor, Orkla, Cognite, Aker Solutions, Omny Security
6. **Footer** — Simbaco AS, Org.nr 930 277 851, Furulundsveien 7c, 0282 Oslo, LinkedIn link

### Design
- White background, light gray alternating sections
- Gold accent (#C5A55A) for highlights and hover states
- Dark text (#1a1a1a), clean sans-serif (Inter)
- Fully responsive for mobile (393px) and desktop

### Technical changes
- Copy 3 asset files to `public/`
- Update `index.html` — favicon reference, page title "Simbaco AS"
- Rewrite `src/pages/Index.tsx` with all sections
- Update `src/index.css` if needed for custom styles

