<script setup>
import { ref } from "vue";

// Shows the video thumbnail and only loads YouTube's player when someone presses play.
const props = defineProps({ id: { type: String, required: true }, title: { type: String, default: "" } });
const playing = ref(false);
const thumb = `https://i.ytimg.com/vi/${props.id}/hqdefault.jpg`;
</script>

<template>
  <div class="relative aspect-video overflow-hidden rounded-2xl bg-navy-950">
    <iframe
      v-if="playing"
      class="absolute inset-0 h-full w-full"
      :src="`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`"
      :title="title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
    <button v-else type="button" class="group absolute inset-0" :aria-label="`Play ${title}`" @click="playing = true">
      <img :src="thumb" :alt="title" loading="lazy" class="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
      <span class="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
      <span class="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-glow transition group-hover:scale-110">
        <svg class="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 001.5.9l10.5-6.5a1 1 0 000-1.8L9.5 4.6A1 1 0 008 5.5z" /></svg>
      </span>
    </button>
  </div>
</template>
