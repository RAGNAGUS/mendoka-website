<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import HeroSection from "@/components/home/HeroSection.vue";
import FeaturedGame from "@/components/home/FeaturedGame.vue";
import GamesSection from "@/components/home/GamesSection.vue";
import TrailersSection from "@/components/home/TrailersSection.vue";
import StudioSection from "@/components/home/StudioSection.vue";
import ContactSection from "@/components/home/ContactSection.vue";
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <FeaturedGame />
    <GamesSection />
    <TrailersSection />
    <StudioSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
