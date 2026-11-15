# Trainers Connect — concept rebuild

A design-led concept rebuild of [trainersconnect.in](https://trainersconnect.in), built by **Tagda Studio** as a client showcase. This is a **mock website**, not the live Trainers Connect product, and it is intentionally set to `noindex`.

**Preview:** https://trainers-connect-concept.pages.dev

## The idea

The original site is a useful directory wrapped in a generic listing layout. This rebuild gives it the feel of a modern Indian learning institution: editorial typography, an ivory-and-forest palette, a numbered register of disciplines, and considered motion instead of plain card grids.

- **Palette:** warm paper `#f4efe4`, forest `#12211a`, terracotta `#bf4a26`, gold `#c79a3b`
- **Type:** Fraunces for display, Manrope for body, IBM Plex Mono for labels
- **Motifs:** arches, hairlines, index numbers, stamps/seals, margin notes, full-bleed editorial photography
- **Motion:** Lenis smooth scroll, GSAP line reveals, sticky process steps, hover-driven register, custom listboxes, page transitions, scroll progress line
- **Accessibility:** keyboard-supporting listboxes and accordions, visible focus, reduced-motion fallbacks

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: hero, search console, register, process, audience split, trainer rail, journal, CTA |
| `/about-us` | Mission, vision, founders, principles |
| `/how-it-works` | Catalogue, five-step process, audience paths |
| `/trainers-directory` | Filterable directory (keyword, category, city, audience, format, language) |
| `/trainers-directory/[slug]` | Trainer profile (5 scraped profiles) |
| `/faq` | Two accordion groups, 20 questions |
| `/blogs` | Journal index with category filtering |
| `/blogs/[slug]` | 6 full articles |
| `/contact-us` | Contact details, location plate, enquiry form |
| `/submit-listing` | Trainer membership page with a two-step profile form |
| `/sign-in` | Member access |
| `/legal/[slug]` | Privacy, terms, refunds |

## Stack

- Next.js 16 (static export), React 19, TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger + SplitText
- Lenis
- Deployed on Cloudflare Pages

## Run locally

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build
npx serve out
```

`postbuild` copies Next's RSC payloads to the flat filenames used by client-side prefetch, so the static export has no 404s.

## Deploy

```bash
npm run build
npx wrangler pages deploy out --project-name trainers-connect-concept
```

## Content & imagery

All copy and photography are reused from the public Trainers Connect website for demonstration purposes. Names, profiles and forms are illustrative. Replace with the client's approved assets before any production use.

---

Concept, design and build by [Tagda Studio](https://tagda.studio).
