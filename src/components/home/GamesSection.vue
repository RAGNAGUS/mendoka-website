<script setup>
import { games } from "@/data/site";

const tone = {
  new: "bg-amber-100 text-amber-800 ring-amber-300",
  live: "bg-sky-100 text-sky-800 ring-sky-300",
};
</script>

<template>
  <section id="games" class="relative bg-brand-mist py-24 text-navy-800 sm:py-32">
    <div class="container-site">
      <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div v-reveal>
          <p class="eyebrow !text-brand-blue">Our games</p>
          <h2 class="heading mt-3 text-navy-800">Worlds worth<br class="hidden sm:block" /> getting lost in</h2>
        </div>
        <p v-reveal="100" class="max-w-md text-base leading-7 text-slate-600">
          Every Mendoka game starts with the same question: what would make this pixel feel like a small wonder?
        </p>
      </div>

      <div class="mt-14 grid gap-7 md:grid-cols-2" :class="games.length % 3 === 0 ? 'lg:grid-cols-3' : 'lg:gap-9'">
        <article
          v-for="(g, i) in games"
          :key="g.id"
          v-reveal="i * 110"
          class="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_30px_70px_-40px_rgba(4,27,61,0.45)] ring-1 ring-navy-800/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-36px_rgba(0,126,214,0.55)]"
        >
          <a :href="g.url" target="_blank" rel="noopener" class="relative block overflow-hidden" :aria-label="g.title">
            <img :src="g.cover" :alt="g.title" loading="lazy" class="aspect-video w-full object-cover transition duration-700 group-hover:scale-105" />
            <span class="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ring-1" :class="tone[g.statusTone]">{{ g.status }}</span>
          </a>
          <div class="flex flex-1 flex-col p-7">
            <p class="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">{{ g.genre }} · {{ g.year }}</p>
            <h3 class="mt-2 font-display text-2xl font-semibold">{{ g.title }}</h3>
            <p class="mt-3 flex-1 text-[15px] leading-7 text-slate-600">{{ g.blurb }}</p>
            <div class="mt-6 flex items-center gap-3">
              <a :href="g.url" target="_blank" rel="noopener" class="btn-dark !px-5 !py-2.5">
                Visit site
                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10.3 3.3a1 1 0 011.4 0l6 6a1 1 0 010 1.4l-6 6a1 1 0 01-1.4-1.4L14.6 11H3a1 1 0 110-2h11.6l-4.3-4.3a1 1 0 010-1.4z" /></svg>
              </a>
              <RouterLink v-if="g.eula" :to="g.eula" class="text-sm font-semibold text-slate-500 hover:text-brand-blue">EULA</RouterLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
