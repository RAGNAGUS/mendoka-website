<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { studio, unreleased } from "@/data/site";

// "solid" keeps the bar opaque on pages without a dark hero behind it (legal pages).
const props = defineProps({ solid: { type: Boolean, default: false } });

const links = [
  { label: "Games", to: "/#games" },
  ...(unreleased.nav ? [unreleased.nav] : []),
  { label: "Trailers", to: "/#trailers" },
  { label: "Studio", to: "/#studio" },
  { label: "Contact", to: "/#contact" },
];

const scrolled = ref(false);
const open = ref(false);
const route = useRoute();

const onScroll = () => (scrolled.value = window.scrollY > 24);
onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
watch(() => route.fullPath, () => (open.value = false));
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      props.solid || scrolled || open
        ? 'border-b border-white/10 bg-navy-900/85 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl'
        : 'border-b border-transparent'
    "
  >
    <div class="container-site flex h-16 items-center gap-6 sm:h-[4.5rem]">
      <RouterLink to="/" class="shrink-0" aria-label="Mendoka home">
        <img src="/image/brand/mendoka-logo-light.png" alt="Mendoka" class="h-9 w-auto sm:h-10" />
      </RouterLink>

      <nav class="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="rounded-full px-4 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/5 hover:text-white"
        >
          {{ l.label }}
        </RouterLink>
      </nav>

      <a :href="studio.kofi" target="_blank" rel="noopener" class="btn-ghost hidden !px-4 !py-2 lg:inline-flex">
        <svg class="h-4 w-4 text-brand-cyan" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.2 0 3.6 1.2 5.2 3 1.6-1.8 3-3 5.2-3 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z" />
        </svg>
        Support us
      </a>

      <button
        type="button"
        class="ml-auto rounded-full p-2 text-white/80 hover:bg-white/10 lg:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        aria-label="Menu"
        @click="open = !open"
      >
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path v-if="!open" d="M4 7h16M4 12h16M4 17h16" />
          <path v-else d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <nav v-if="open" id="mobile-nav" class="container-site grid gap-1 pb-5 lg:hidden" aria-label="Main">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="rounded-xl px-4 py-3 text-base font-semibold text-white/85 hover:bg-white/5"
        >
          {{ l.label }}
        </RouterLink>
        <a :href="studio.kofi" target="_blank" rel="noopener" class="btn-primary mt-2">Support us on Ko-fi</a>
      </nav>
    </transition>
  </header>
</template>
