<script setup>
import StarMark from "@/components/StarMark.vue";
import { timeline, unreleased } from "@/data/site";

const values = ["Simple", "Trusted", "Brighter", "Further"];
</script>

<template>
  <section id="studio" class="relative overflow-hidden bg-white py-24 text-navy-800 sm:py-32">
    <svg class="pointer-events-none absolute -right-32 -top-10 h-[30rem] w-[44rem] text-brand-ice/70" viewBox="0 0 700 480" fill="none" aria-hidden="true">
      <path d="M20 460 C 200 160, 470 40, 680 70" stroke="currentColor" stroke-width="60" stroke-linecap="round" />
    </svg>
    <div class="container-site relative grid gap-16 lg:grid-cols-[1fr_1fr]">
      <div v-reveal>
        <p class="eyebrow !text-brand-blue">The studio</p>
        <h2 class="heading mt-3 text-navy-800">One developer.<br />Many worlds.</h2>
        <div class="mt-7 space-y-5 text-[17px] leading-8 text-slate-600">
          <p>
            Mendoka is a one-person game studio, founded in 2023 by a solo developer with a passion for turning every
            pixel into an extraordinary wonder.
          </p>
          <p>
            Every world here — the skeleton hero’s long road in Spire Horizon and the online realm of Aetheria{{ unreleased.studioMention }} — is designed, built and cared for by one person. If you enjoy
            what we make, buying a game or saying hello on Ko-fi keeps the next world coming.
          </p>
        </div>
        <ul class="mt-8 flex flex-wrap gap-2">
          <li v-for="v in values" :key="v" class="chip border-brand-blue/20 bg-brand-ice text-navy-700">
            <StarMark :size="11" /> {{ v }}
          </li>
        </ul>
      </div>

      <ol class="relative ml-3 border-l-2 border-dashed border-brand-blue/25">
        <li v-for="(t, i) in timeline" :key="t.title" v-reveal="i * 110" class="relative pb-10 pl-10 last:pb-0">
          <span class="absolute -left-[15px] top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white ring-4 ring-brand-mist">
            <StarMark :size="18" />
          </span>
          <p class="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-blue">{{ t.year }}</p>
          <h3 class="mt-1 font-display text-2xl font-semibold">{{ t.title }}</h3>
          <p class="mt-2 max-w-md text-[15px] leading-7 text-slate-600">{{ t.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
