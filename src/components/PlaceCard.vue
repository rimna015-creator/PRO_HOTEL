<script setup lang="ts">
import type { Place } from "../Data/Explore"

defineProps<{
  place: Place
}>()
</script>

<template>
  <div
    class="w-full max-w-[340px] overflow-hidden rounded-xl bg-gray-200 shadow-md transition-shadow hover:shadow-lg"
  >
    <img
      :src="place.image"
      :alt="place.name"
      class="h-[210px] w-full object-cover"
    />

    <div class="p-4">
      <div class="flex items-center justify-between">
        <span
          class="inline-block rounded-full bg-blue-100 px-3 py-0.5 text-xs font-semibold text-blue-700"
        >
          {{ place.category }}
        </span>
        <span class="text-sm font-semibold text-gray-700">
          <i class="bi bi-star-fill text-blue-500"></i>
          {{ place.rating }}
        </span>
      </div>

      <h2 class="mt-2 text-lg font-semibold text-gray-800">
        {{ place.name }}
      </h2>

      <p class="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
        {{ place.description }}
      </p>

      <div class="mt-3 space-y-1.5 text-sm text-gray-600">
        <p>
          <i class="bi bi-clock mr-1.5 text-blue-600"></i>
          {{ place.openHours }}
        </p>
        <p>
          <i class="bi bi-geo-alt-fill mr-1.5 text-blue-600"></i>
          {{ place.location }}
        </p>
      </div>
    </div>
  </div>
</template>