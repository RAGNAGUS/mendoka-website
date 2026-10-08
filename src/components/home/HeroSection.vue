<script setup>
import StarMark from "@/components/StarMark.vue";
import { computed } from "vue";
import { games, studio, unreleased } from "@/data/site";

const teaser = unreleased.hero;

// The covers fan out behind each other, newest in front (front = last in the stack).
const stack = [...games].reverse();
const BACK = [
  "-translate-x-[24%] -translate-y-[18%] -rotate-[8deg] scale-[0.78] opacity-80 group-hover:-translate-x-[32%] group-hover:-rotate-[11deg] group-hover:opacity-100",
  "translate-x-[24%] -translate-y-[24%] rotate-[7deg] scale-[0.8] opacity-90 group-hover:translate-x-[32%] group-hover:rotate-[10deg] group-hover:opacity-100",
];
const FRONT = "z-10 translate-y-[16%] shadow-glow group-hover:translate-y-[20%] group-hover:scale-[1.03]";
const cardClass = (i) => (i === stack.length - 1 ? FRONT : BACK[i % BACK.length]);
const front = computed(() => stack[stack.length - 1]);
</script>

<template>
  <section class="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-900 pb-20 pt-28 lg:pt-24">
    <!-- Night sky: glows, stars and the logo's sweeping arc -->
    <div class="starfield pointer-events-none absolute inset-0 -z-10 opacity-70" />
    <div class="pointer-events-none absolute -right-40 -top-40 -z-10 h-[38rem] w-[38rem] rounded-full bg-brand-cyan/20 blur-[120px]" />
    <div class="pointer-events-none absolute -bottom-56 -left-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-blue/25 blur-[120px]" />
    <svg
      class="pointer-events-none absolute -z-10 left-[-10%] top-[8%] h-[85%] w-[120%] opacity-80"
      viewBox="0 0 1200 600"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="arc" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stop-color="#007ed6" stop-opacity="0" />
          <stop offset="0.45" stop-color="#007ed6" />
          <stop offset="1" stop-color="#00b4ff" />
        </linearGradient>
      </defs>
      <path d="M-40 590 C 420 560, 760 300, 1170 110" stroke="url(#arc)" stroke-width="3" stroke-linecap="round" pathLength="1" stroke-dasharray="1" class="animate-draw" />
      <path d="M-40 590 C 420 560, 760 300, 1170 110" stroke="url(#arc)" stroke-width="18" stroke-linecap="round" opacity="0.12" pathLength="1" stroke-dasharray="1" class="animate-draw blur-[6px]" />
    </svg>
    <div class="pointer-events-none absolute right-[8%] top-[13%] -z-10 hidden animate-twinkle lg:block">
      <StarMark :size="54" />
    </div>

    <div class="container-site grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
      <div class="animate-fade-up">
        <p class="eyebrow"><StarMark :size="14" /> Independent game studio</p>
        <h1 class="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
          From pixels<br />
          to <span class="bg-gradient-to-r from-brand-cyan via-sky-300 to-white bg-clip-text text-transparent">wonders.</span>
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-8 text-white/70">
          <template v-if="teaser">
            {{ teaser.before }} <span class="font-semibold text-gold">{{ teaser.highlight }}</span>{{ teaser.after }}
          </template>
          <template v-else>
            Mendoka makes worlds you want to live in — from the open roads of Spire Horizon to the sky-high towers of
            Aetheria in Spire Horizon Online.
          </template>
        </p>
        <div class="mt-9 flex flex-wrap gap-3">
          <RouterLink to="/#games" class="btn-primary !px-7 !py-3.5">
            Explore our games
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10.3 3.3a1 1 0 011.4 0l6 6a1 1 0 010 1.4l-6 6a1 1 0 01-1.4-1.4L14.6 11H3a1 1 0 110-2h11.6l-4.3-4.3a1 1 0 010-1.4z" /></svg>
          </RouterLink>
          <RouterLink v-if="teaser" :to="teaser.cta.to" class="btn-ghost !px-7 !py-3.5">{{ teaser.cta.label }}</RouterLink>
          <RouterLink v-else to="/#trailers" class="btn-ghost !px-7 !py-3.5">Watch the trailers</RouterLink>
        </div>
        <dl class="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
          <div><dt class="text-xs font-semibold uppercase tracking-wider text-white/45">Founded</dt><dd class="mt-1 font-display text-3xl">{{ studio.founded }}</dd></div>
          <div><dt class="text-xs font-semibold uppercase tracking-wider text-white/45">Games</dt><dd class="mt-1 font-display text-3xl">{{ games.length }}</dd></div>
          <div><dt class="text-xs font-semibold uppercase tracking-wider text-white/45">Made by</dt><dd class="mt-1 font-display text-3xl">1 dev</dd></div>
        </dl>
      </div>

      <!-- Fanned stack of game covers -->
      <div class="group relative mx-auto aspect-[4/3] w-full max-w-xl [perspective:1400px]">
        <a
          v-for="(g, i) in stack"
          :key="g.id"
          :href="g.url"
          target="_blank"
          rel="noopener"
          class="absolute inset-x-[6%] top-[12%] overflow-hidden rounded-2xl border border-white/15 shadow-card transition-all duration-500 ease-out"
          :class="cardClass(i)"
        >
          <img :src="g.cover" :alt="g.title" class="aspect-video w-full object-cover" />
          <span
            v-if="g === front"
            class="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider shadow"
            :class="g.statusTone === 'new' ? 'bg-gold text-navy-900' : 'bg-brand-cyan text-navy-900'"
          >
            {{ g.statusTone === "new" ? `New · ${g.status}` : "Latest release" }}
          </span>
        </a>
        <div class="pointer-events-none absolute -bottom-2 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-full bg-brand-blue/40 blur-2xl" />
      </div>
    </div>

    <RouterLink :to="teaser ? teaser.cta.to : '/#games'" class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/40 transition hover:text-white sm:block" aria-label="Scroll down">
      <svg class="h-7 w-7 animate-floaty" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9l6 6 6-6" /></svg>
    </RouterLink>
  </section>
</template>
