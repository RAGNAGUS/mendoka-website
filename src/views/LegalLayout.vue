<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import { legal } from "@/data/site";
</script>

<template>
  <SiteHeader solid />
  <main class="bg-brand-mist pb-24 pt-28 sm:pt-32">
    <div class="container-site grid gap-8 lg:grid-cols-[15rem_1fr]">
      <aside class="lg:sticky lg:top-28 lg:self-start">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Legal</p>
        <nav class="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1" aria-label="Legal documents">
          <RouterLink
            v-for="l in legal"
            :key="l.to"
            :to="l.to"
            class="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-navy-800"
            active-class="!bg-white !text-navy-800 shadow-sm ring-1 ring-navy-800/5"
          >
            {{ l.label }}
          </RouterLink>
        </nav>
      </aside>
      <article class="legal-shell rounded-3xl bg-white p-6 shadow-[0_30px_70px_-40px_rgba(4,27,61,0.35)] ring-1 ring-navy-800/5 sm:p-12">
        <RouterView />
      </article>
    </div>
  </main>
  <SiteFooter />
</template>
