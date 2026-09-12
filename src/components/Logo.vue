<script setup lang="ts">
withDefaults(defineProps<{ size?: number; dark?: boolean }>(), { size: 34, dark: false })
</script>

<template>
  <div class="flex items-center gap-2.5 select-none">
    <!-- Angkor Wat Temple Mark -->
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      :class="dark ? 'text-white' : 'text-blue-800'"
    >
      <path d="M32 6 L36 15 L28 15 Z" fill="currentColor" />
      <rect x="29" y="15" width="6" height="35" rx="1" fill="currentColor" />
      <rect x="20" y="23" width="5" height="27" rx="1" fill="currentColor" />
      <rect x="39" y="23" width="5" height="27" rx="1" fill="currentColor" />
      <rect x="12" y="30" width="4" height="20" rx="1" fill="currentColor" />
      <rect x="48" y="30" width="4" height="20" rx="1" fill="currentColor" />
      <rect x="8" y="50" width="48" height="3" rx="1.5" fill="currentColor" />
      <circle cx="32" cy="4.5" r="1.8" fill="currentColor" :class="dark ? 'text-emerald-400' : 'text-emerald-600'" />
    </svg>

    <!-- Wordmark -->
    <span class="flex items-baseline">
      <span
        class="font-sans text-2xl font-bold tracking-tight"
        :class="dark ? 'text-white' : 'text-blue-800'"
      >Angkor</span><span
        class="font-sans text-sm font-semibold"
        :class="dark ? 'text-white/60' : 'text-blue-500'"
      >Booking.</span>
    </span>
  </div>
</template>