<template>
  <div
    class="w-[300px] overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <img
      :src="hotel.image"
      :alt="hotel.name"
      class="h-[200px] w-full object-cover"
    />

    <div class="p-[18px]">

      <!-- Hotel Type -->
      <span class="text-sm text-gray-500">
        {{ hotel.type }}
      </span>

      <!-- Hotel Name -->
      <h2 class="my-2 text-xl font-semibold text-gray-800">
        {{ hotel.name }}
      </h2>

      <!-- Location -->
      <p class="text-gray-600">
        📍 {{ hotel.location }}
      </p>

      <!-- Stars -->
      <p class="my-2">
        {{ "⭐".repeat(hotel.stars) }}
      </p>

      <!-- Rating -->
      <p class="font-bold text-gray-700">
        ⭐ {{ hotel.rating }} / 5
      </p>

      <!-- Price -->
      <div class="my-4">
        <strong class="text-[22px] font-bold text-gray-900">
          ${{ hotel.price }}
        </strong>

        <span class="text-gray-500">
          / night
        </span>
      </div>

      <!-- View Details Button -->
      <button
        class="w-full rounded-lg border-0 px-4 py-2.5 font-medium text-white transition duration-300 hover:opacity-90 bg-blue-600"
      >
        View Details
      </button>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { Hotel } from "../Data/Hotel"

defineProps<{
  hotel: Hotel
}>()
</script>

