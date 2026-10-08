<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import HeroSection from "@/components/home/HeroSection.vue";
import GamesSection from "@/components/home/GamesSection.vue";
import TrailersSection from "@/components/home/TrailersSection.vue";
import StudioSection from "@/components/home/StudioSection.vue";
import ContactSection from "@/components/home/ContactSection.vue";
import { unreleased } from "@/data/site";
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <!-- Unannounced game: null unless the build switches it on (see vite.config.js) -->
    <component :is="unreleased.Section" v-if="unreleased.Section" />
    <GamesSection />
    <TrailersSection />
    <StudioSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
