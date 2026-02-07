# Super Naari updates – verification checklist

Use this to confirm all requested changes are in place.

## Content & copy

- [ ] **About Super Naari** – Full WPS narrative + Saroni Roy quote (`AboutSection.tsx`)
- [ ] **Section order** – About → Collaborate → Featured Projects (`Index.tsx`: AboutSection, TestimonialsSection, NewArrivalsSection)
- [ ] **Collaborate** – Subtitle: "Let's make a better world together" (no full stop) (`TestimonialsSection.tsx`)
- [ ] **INNOVATIVE DIGITAL PLATFORM** – Third card: "Super Naari Community" with WPS thought-leaders description (`StorySection.tsx`)
- [ ] **Featured Projects** – All three cards use WAGEC description; images have descriptive alt (`NewArrivalsSection.tsx`)

## Navigation & pages

- [ ] **Impact Stories** – Hero button says "Impact Stories" and goes to `/impact-stories` (`HeroSection1.tsx`)
- [ ] **Impact Stories page** – Title `#SuperNaari`, "Impact Stories" headline, full Period Poverty section + videos (`/impact-stories`, `src/pages/ImpactStories.tsx`)
- [ ] **Route** – `App.tsx` has `<Route path="/impact-stories" element={<ImpactStories />} />`

## Branding & assets

- [ ] **Twitter → X** – Navbar and Footer use X icon; Footer aria-label "X" (no "Twitter") (`Navbar.tsx`, `Footer.tsx`)
- [ ] **Super Naari logo** – Comment in `HeroSection1.tsx`; replace `public/lovable-uploads/midlogo.png` with high-res when ready
- [ ] **Awards and Associations** – Section heading + dark background; logo paths `logo1.png`–`logo11.png` (replace files from Drive) (`ContactSection.tsx`)

## Footer & social

- [ ] **Connect With Us On** – Exact casing (capital U, O), no full stop (`Footer.tsx`)
- [ ] **Social links** – Facebook, Instagram, X, LinkedIn (company), YouTube, IMDb point to SRf/Saroni official pages
- [ ] **YouTube** – Icon and link present (update URL if channel differs from `@SaroniRoyFoundation`)

## Design & extras

- [ ] **Impact stat strip** – "500 million women" line below hero on homepage (`Index.tsx`)
- [ ] **DirectionSection** – Typo fixed ("for"), blockquote markup fixed
- [ ] **HeroSection.tsx** – If ever used: "Impact Stories" button and navigate to `/impact-stories` (kept in sync)

## How to verify locally

1. `npm install` (if needed)
2. `npm run dev`
3. Open http://localhost:5173 (or the port shown)
4. Check: Home → scroll order (About, Collaborate, Featured Projects, Awards and Associations)
5. Click **Impact Stories** → should open `/impact-stories` with #SuperNaari and Period Poverty content + videos
6. Check footer: "Connect With Us On", X and YouTube icons, correct links
7. Check Navbar: X icon (not bird), Subscribe, socials
8. Resize window to test responsive layout
