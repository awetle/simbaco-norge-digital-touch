

## Simbaco.no -- Build Plan

### What gets built
A single-page, light minimalist website with these sections:

1. **Header** -- Gold lion logo + "SIMBACO" text, sticky minimal nav
2. **Hero** -- "IT Management & Sourcing Consultancy" + tagline "Open, honest and effective collaboration" + Oslo location badge
3. **About** -- 20+ years of experience in IT management and sourcing. Led operational and vendor management teams at Orkla, Cognite, and Telenor. Strong track record in internal IT operations, scalable IT landscapes, procurement and vendor management. Currently supporting Aker Solutions and Omny Security.
4. **Services** -- Clean card grid: IT Cost Optimization, Procurement & Negotiations, Vendor Management, IT Strategy & Digitalization, Outsourcing & Transformation, IT Operation Process Design, Offshore Agreements
5. **Experience** -- Notable companies: Telenor, Orkla, Cognite, Aker Solutions, Omny Security
6. **Footer** -- Simbaco AS, Org.nr 930 277 851, Furulundsveien 7c, 0282 Oslo, LinkedIn link

### Design
- White background, light gray sections for contrast
- Gold accent color (#C5A55A) from existing branding
- Dark text (#333333)
- Clean sans-serif typography (Inter via system fonts already available)
- Fully responsive (mobile-first, works on 393px viewport)

### Technical details
- Copy `Transparent_Logo.svg` to `public/logo.svg` for use as logo and favicon
- All content in `src/pages/Index.tsx`
- Update `index