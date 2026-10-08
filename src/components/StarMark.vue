<script setup>
// The four-point star from the Mendoka logo.
defineProps({
  size: { type: [Number, String], default: 24 },
  solid: { type: String, default: "" },
});
const id = `star-${Math.random().toString(36).slice(2, 8)}`;
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient :id="id" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stop-color="#007ed6" />
        <stop offset="1" stop-color="#00b4ff" />
      </linearGradient>
    </defs>
    <path
      d="M32 2c2 15.5 8 23 30 30-22 7-28 14.5-30 30-2-15.5-8-23-30-30 22-7 28-14.5 30-30z"
      :fill="solid || `url(#${id})`"
    />
  </svg>
</template>
