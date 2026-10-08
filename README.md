# Mendoka website

Studio site for Mendoka (Vue 3 + Vite + Tailwind). One long home page — Lantern Hearth, games, trailers,
studio, contact — plus the legal pages. Deployed on Vercel (`vercel.json` sends every path to the app).

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
```

## Where to change things

| What | File |
|---|---|
| Games, links, dates, trailers, timeline, e-mail, Ko-fi | `src/data/site.js` |
| Brand colors (Deep Navy / Bright Blue / Cyan) and fonts | `tailwind.config.js` |
| Home page sections | `src/components/home/*.vue` |
| Header / footer | `src/components/SiteHeader.vue`, `SiteFooter.vue` |
| Legal text | `src/views/PrivacyPolicyView.vue`, `TermsOfServiceView.vue`, `src/views/EULA/` |
| Images | `public/image/brand/`, `public/image/games/` |

Adding a game: put its cover in `public/image/games/` and add an entry to `games` in `src/data/site.js`.

Old addresses keep working: `/about`, `/events`, `/contact` and `/games` jump to the matching section of the home page.
