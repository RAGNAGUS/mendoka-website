<script setup>
import YouTubeLite from "@/components/YouTubeLite.vue";
import { trailers } from "@/data/site";
</script>

<template>
  <section id="trailers" class="relative overflow-hidden bg-navy-900 py-24 sm:py-32">
    <div class="starfield pointer-events-none absolute inset-0 opacity-40" />
    <div class="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-blue/20 blur-[110px]" />
    <div class="container-site relative">
      <div v-reveal class="max-w-2xl">
        <p class="eyebrow">Trailers</p>
        <h2 class="heading mt-3">See the worlds in motion</h2>
      </div>
      <div class="mt-12 grid gap-8 lg:grid-cols-2">
        <article v-for="(t, i) in trailers" :key="t.id" v-reveal="i * 120" class="rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-card">
          <YouTubeLite :id="t.id" :title="t.title" />
          <div class="px-3 pb-3 pt-5">
            <p class="text-xs font-semibold uppercase tracking-wider text-brand-cyan">{{ t.date }}</p>
            <h3 class="mt-1.5 text-xl font-bold">{{ t.title }}</h3>
            <p class="mt-1.5 text-sm text-white/60">{{ t.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
