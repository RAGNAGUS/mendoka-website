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

## Unannounced games (Lantern Hearth)

Lantern Hearth is hidden until it is announced. Everything about it — text, links and images — lives in
`src/unreleased/`, and a normal build leaves all of it out (the published site has no trace of it).

To see it or publish it, set `SHOW_LANTERN_HEARTH=1`:

```sh
SHOW_LANTERN_HEARTH=1 npm run dev     # preview locally
```

Because the GitHub repo is public, `src/unreleased/` is kept out of git (`.gitignore`) — only the empty
stand-in `off.js` is committed. Those files exist on this machine only, so back them up yourself.
On launch day, move the images to `public/image/games/` and the data into `src/data/site.js` (or remove
the folder from `.gitignore`) before switching it on in the workflow.

Old addresses keep working: `/about`, `/events`, `/contact` and `/games` jump to the matching section of the home page.
