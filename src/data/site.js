// Everything the site says about Mendoka and its games lives here, so updating a game,
// a link or a date never means touching the page layout.
import * as lanternHearth from "@unreleased/lantern-hearth";

// Unannounced games stay out of the built site until switched on (see vite.config.js).
export const SHOW_LANTERN_HEARTH = __SHOW_LANTERN_HEARTH__;
export const unreleased = lanternHearth;

export const studio = {
  name: "Mendoka",
  tagline: "From pixels to wonders.",
  brandLine: "A brighter tomorrow, together.",
  email: "contact@mendoka.com",
  kofi: "https://ko-fi.com/mendoka/tiers",
  founded: 2023,
};

const releasedGames = [
  {
    id: "spire-horizon-online",
    title: "Spire Horizon Online",
    genre: "MMORPG",
    status: "Released",
    statusTone: "live",
    year: "2024",
    date: "6 December 2024",
    cover: "/image/games/spire-horizon-online.jpg",
    url: "https://sho.mendoka.com/",
    eula: "/spire-horizon-online-eula",
    blurb:
      "Enter Aetheria as a resurrected skeleton warrior. Choose from various classes, battle numerous monsters and explore diverse regions. Will you save Aetheria?",
  },
  {
    id: "spire-horizon",
    title: "Spire Horizon",
    genre: "Open-world RPG",
    status: "Released",
    statusTone: "live",
    year: "2023",
    date: "28 July 2023",
    cover: "/image/games/spire-horizon.jpg",
    url: "https://spirehorizon.mendoka.com",
    eula: "/spire-horizon-eula",
    blurb:
      "A skeleton hero explores a visually stunning world, battles formidable enemies and travels far in search of a beloved wife.",
  },
];

export const games = SHOW_LANTERN_HEARTH ? [lanternHearth.game, ...releasedGames] : releasedGames;

export const trailers = [
  {
    id: "POEOPQ56UKI",
    title: "Spire Horizon Online — Trailer",
    date: "25 July 2024",
    text: "Become a resurrected skeleton warrior in Aetheria.",
  },
  {
    id: "LxkN3GAXh7I",
    title: "Spire Horizon — Trailer",
    date: "28 July 2023",
    text: "An open-world journey in search of a beloved wife.",
  },
];

export const timeline = [
  { year: "2023", title: "Mendoka is founded", text: "A one-person studio with a simple goal: turn every pixel into a wonder." },
  { year: "2023", title: "Spire Horizon", text: "Our first open-world RPG and its skeleton hero set out on 28 July." },
  { year: "2024", title: "Spire Horizon Online", text: "The adventure goes online — an MMORPG set in Aetheria, released 6 December." },
];
if (SHOW_LANTERN_HEARTH) timeline.push(lanternHearth.timelineEntry);

export const legal = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Spire Horizon EULA", to: "/spire-horizon-eula" },
  { label: "Spire Horizon Online EULA", to: "/spire-horizon-online-eula" },
];
