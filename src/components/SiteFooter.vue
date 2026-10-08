<script setup>
import StarMark from "@/components/StarMark.vue";
import { games, legal, studio } from "@/data/site";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="relative overflow-hidden bg-navy-950 pt-16 text-white/70">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent" />
    <div class="container-site grid gap-12 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <img src="/image/brand/mendoka-logo-light.png" alt="Mendoka" class="h-12 w-auto" />
        <p class="mt-5 max-w-xs text-sm leading-6">An independent game studio turning every pixel into a wonder.</p>
        <a :href="`mailto:${studio.email}`" class="mt-4 inline-block text-sm font-semibold text-brand-cyan hover:underline">{{ studio.email }}</a>
      </div>
      <div>
        <h3 class="text-sm font-bold text-white">Games</h3>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li v-for="g in games" :key="g.id">
            <a :href="g.url" target="_blank" rel="noopener" class="hover:text-white">{{ g.title }}</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-sm font-bold text-white">Studio</h3>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><RouterLink to="/#studio" class="hover:text-white">About</RouterLink></li>
          <li><RouterLink to="/#trailers" class="hover:text-white">Trailers</RouterLink></li>
          <li><RouterLink to="/#contact" class="hover:text-white">Contact</RouterLink></li>
          <li><a :href="studio.kofi" target="_blank" rel="noopener" class="hover:text-white">Ko-fi</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-sm font-bold text-white">Legal</h3>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li v-for="l in legal" :key="l.to"><RouterLink :to="l.to" class="hover:text-white">{{ l.label }}</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
        <span>© {{ year }} Mendoka. All rights reserved.</span>
        <span class="inline-flex items-center gap-2 tracking-[0.2em] uppercase text-white/40">
          <StarMark :size="12" /> A brighter tomorrow together
        </span>
      </div>
    </div>
  </footer>
</template>
