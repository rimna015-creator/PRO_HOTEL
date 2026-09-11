<template>
  <div
    class="w-[300px] overflow-hidden rounded-xl bg-blue-100 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  >

    <!-- Hotel Image -->
    <img
      :src="hotel.image"
      :alt="hotel.name"
      class="h-[200px] w-full object-cover"
    />

    <div class="p-[18px]">

      <!-- Hotel Name -->
      <h2 class="mb-2 text-xl font-semibold text-gray-800">
        {{ hotel.name }}
      </h2>
      
      <!-- Hotel Type + Stars -->
      <div class="mb-2 flex items-center gap-3">

        <!-- Hotel Type -->
        <span class="text-sm font-medium text-gray-600">
          {{ hotel.type }}
        </span>

        <!-- Stars -->
        <span class="flex items-center gap-1 text-sm text-yellow-500">
          <i class="bi bi-star-fill"></i>
          {{ hotel.stars }}
        </span>

      </div>

      <!-- Rating + Number of Reviews -->
      <p class="mb-3 text-sm text-gray-700">
        <i class="bi bi-star-fill text-yellow-500"></i>
        <span class="font-semibold">
          {{ hotel.rating }}
        </span>
        <span class="text-gray-500">
          ({{ hotel.reviewer }} reviews)
        </span>
      </p>

      <!-- Price -->
      <div class="mb-3">
        <strong class="text-[22px] font-bold text-gray-900">
          ${{ hotel.price }}
        </strong>

        <span class="text-sm text-gray-500">
          / night
        </span>
      </div>

      <!-- Location -->
      <div class="mb-4 flex items-center justify-between">
        <p class="text-sm text-gray-600">
          <i class="bi bi-geo-alt-fill mr-1 text-blue-600"></i>
          {{ hotel.location }}
        </p>

        <!-- Google Maps Button -->
        <button
          class="flex items-center gap-1 rounded-lg bg-blue-400 px-3 py-1.5 text-xs font-medium text-white transition duration-300 hover:bg-green-700"
          @click="openGoogleMaps"
        >
          <i class="bi bi-map"></i>
          Location
        </button>
      </div>

      <!-- View Details Button -->
      <router-link
        :to="'/hotel/' + hotel.id"
        class="block w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center font-medium text-white transition duration-300 hover:bg-blue-700"
      >
        View Details
      </router-link>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { Hotel } from "../Data/Hotel"

const props = defineProps<{
  hotel: Hotel
}>()

const openGoogleMaps = () => {
  const query = encodeURIComponent(`${props.hotel.name} ${props.hotel.location}`)
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank")
}
</script>