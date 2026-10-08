<script setup>
import StarMark from "@/components/StarMark.vue";
import { studio } from "@/data/site";
</script>

<template>
  <section id="contact" class="relative isolate overflow-hidden bg-navy-800 py-24 sm:py-32">
    <div class="starfield pointer-events-none absolute inset-0 -z-10 opacity-50" />
    <div class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-cyan/15 blur-[120px]" />
    <div class="container-site">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <span class="inline-block animate-twinkle"><StarMark :size="40" /></span>
        <h2 class="heading mt-5">We’d love to hear from you</h2>
        <p class="mt-5 text-lg leading-8 text-white/70">
          Questions about our games, joining a beta, or reviewing a Mendoka title — reach out any time.
        </p>
      </div>

      <div class="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
        <div v-reveal class="flex flex-col rounded-3xl border border-white/10 bg-navy-900/60 p-8 backdrop-blur">
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
          </span>
          <h3 class="mt-6 text-2xl font-bold">Write to us</h3>
          <p class="mt-3 flex-1 text-[15px] leading-7 text-white/65">
            Players, beta testers and press are all welcome. Reviewers: tell us about your platform, your audience and
            share links to your past reviews, and we’ll do our best to send you a copy.
          </p>
          <a :href="`mailto:${studio.email}`" class="btn-primary mt-7 self-start !px-6">{{ studio.email }}</a>
        </div>

        <div v-reveal="120" class="flex flex-col rounded-3xl border border-white/10 bg-navy-900/60 p-8 backdrop-blur">
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-lantern-amber">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.2 0 3.6 1.2 5.2 3 1.6-1.8 3-3 5.2-3 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z" /></svg>
          </span>
          <h3 class="mt-6 text-2xl font-bold">Support the studio</h3>
          <p class="mt-3 flex-1 text-[15px] leading-7 text-white/65">
            Mendoka is made by one person. Every game bought and every coffee on Ko-fi goes straight into building the next world.
          </p>
          <a :href="studio.kofi" target="_blank" rel="noopener" class="btn-ghost mt-7 self-start !px-6">Support us on Ko-fi</a>
        </div>
      </div>

      <p v-reveal class="mt-20 text-center font-display text-3xl italic text-white/80 sm:text-4xl">
        {{ studio.brandLine }}
      </p>
    </div>
  </section>
</template>
