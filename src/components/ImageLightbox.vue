<script setup>
import { onBeforeUnmount, onMounted } from "vue";

const props = defineProps({
  images: { type: Array, required: true },
  index: { type: Number, default: -1 },
});
const emit = defineEmits(["close", "move"]);

const step = (d) => emit("move", (props.index + d + props.images.length) % props.images.length);
const onKey = (e) => {
  if (props.index < 0) return;
  if (e.key === "Escape") emit("close");
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
};
onMounted(() => window.addEventListener("keydown", onKey));
onBeforeUnmount(() => window.removeEventListener("keydown", onKey));
</script>

<template>
  <Teleport to="body">
    <transition enter-active-class="transition duration-200" enter-from-class="opacity-0" leave-active-class="transition duration-150" leave-to-class="opacity-0">
      <div
        v-if="index >= 0"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur"
        role="dialog"
        aria-modal="true"
        @click.self="emit('close')"
      >
        <figure class="max-w-6xl">
          <img :src="images[index].src" :alt="images[index].alt" class="max-h-[80vh] w-auto rounded-xl border border-white/15 shadow-glow" />
          <figcaption class="mt-3 text-center text-sm text-white/70">{{ index + 1 }} / {{ images.length }} · {{ images[index].alt }}</figcaption>
        </figure>
        <button type="button" class="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Close" @click="emit('close')">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <button type="button" class="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:block" aria-label="Previous" @click="step(-1)">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <button type="button" class="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:block" aria-label="Next" @click="step(1)">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </transition>
  </Teleport>
</template>
