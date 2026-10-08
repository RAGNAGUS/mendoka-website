<script setup>
import { ref } from "vue";
import { games, lanternHearth as lh } from "@/data/site";
import ImageLightbox from "@/components/ImageLightbox.vue";

const game = games.find((g) => g.id === "lantern-hearth");
const shown = ref(-1);
</script>

<template>
  <section id="lantern-hearth" class="relative isolate overflow-hidden bg-navy-950 py-24 sm:py-32">
    <!-- The game's own warm palette, set against the studio's night blue -->
    <img src="/image/games/lantern-hearth-vista.jpg" alt="" class="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_40%] opacity-60" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/30" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
    <div class="pointer-events-none absolute -left-24 top-1/3 -z-10 h-80 w-80 rounded-full bg-lantern-amber/20 blur-[100px]" />

    <div class="container-site">
      <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div v-reveal>
          <span class="chip border-lantern-amber/50 bg-lantern-amber/10 text-lantern-amber">
            <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-lantern-amber" /> Now in development
          </span>
          <img :src="game.logo" alt="Lantern Hearth" class="mt-6 w-full max-w-[22rem] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]" />
          <p class="mt-6 max-w-xl text-lg leading-8 text-white/80">{{ game.blurb }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span class="chip border-white/15 bg-white/5 text-white/80">{{ game.genre }}</span>
            <span class="chip border-white/15 bg-white/5 text-white/80">Free to play</span>
            <span v-for="p in game.platforms" :key="p" class="chip border-white/15 bg-white/5 text-white/80">{{ p }}</span>
          </div>
          <div class="mt-9 flex flex-wrap gap-3">
            <a
              :href="lh.url"
              target="_blank"
              rel="noopener"
              class="btn bg-gradient-to-r from-lantern-amber to-lantern-ember !px-7 !py-3.5 text-navy-900 shadow-[0_18px_50px_-14px_rgba(242,184,75,0.7)] hover:-translate-y-0.5 hover:brightness-110"
            >
              Visit the official site
              <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M11 3a1 1 0 100 2h2.6l-6.3 6.3a1 1 0 101.4 1.4L15 6.4V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
            </a>
            <a :href="lh.wiki" target="_blank" rel="noopener" class="btn-ghost !px-7 !py-3.5">Read the wiki</a>
          </div>
        </div>

        <ul class="grid gap-4 sm:grid-cols-2">
          <li
            v-for="(f, i) in lh.features"
            :key="f.title"
            v-reveal="i * 90"
            class="rounded-2xl border border-white/10 bg-navy-900/60 p-6 backdrop-blur-md transition hover:border-lantern-amber/40"
          >
            <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-lantern-amber/15 text-lantern-amber">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 2h4v2h-4zM7 5h10l-1 3H8zM8 8h8v11a2 2 0 01-2 2h-4a2 2 0 01-2-2zM12 11c1.4 2 1.4 4 0 6-1.4-2-1.4-4 0-6z" /></svg>
            </span>
            <h3 class="mt-4 text-lg font-bold text-white">{{ f.title }}</h3>
            <p class="mt-1.5 text-sm leading-6 text-white/65">{{ f.text }}</p>
          </li>
        </ul>
      </div>

      <div class="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <button
          v-for="(s, i) in lh.shots"
          :key="s.src"
          v-reveal="i * 80"
          type="button"
          class="group relative overflow-hidden rounded-xl border border-white/10 bg-navy-900"
          @click="shown = i"
        >
          <img :src="s.src" :alt="s.alt" loading="lazy" class="aspect-video w-full object-cover transition duration-500 group-hover:scale-105" />
          <span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent px-3 pb-2 pt-8 text-left text-xs font-semibold text-white/90 opacity-0 transition group-hover:opacity-100">{{ s.alt }}</span>
        </button>
      </div>
    </div>

    <ImageLightbox :images="lh.shots" :index="shown" @close="shown = -1" @move="(i) => (shown = i)" />
  </section>
</template>
