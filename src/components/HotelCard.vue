<template>
  <div
    class="w-[290px] overflow-hidden rounded-xl bg-blue-100 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  >

    <!-- Hotel Image -->
    <img
      :src="hotel.image"
      :alt="hotel.name"
      class="h-[150px] w-full object-cover"
    />

    <div class="p-[18px]">

      <!-- Hotel Name -->
      <h2 class="mb-2 text-xl font-semibold text-gray-800">
        {{ hotel.name }}
      </h2>
        <br v-if="isShortName" />
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
      <p class="mb-4 text-sm text-gray-600">
        <i class="bi bi-geo-alt-fill mr-1 text-blue-600"></i>
        {{ hotel.location }}
      </p>

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
import { computed } from "vue"
import type { Hotel } from "../Data/Hotel"

const props = defineProps<{
  hotel: Hotel
}>()

const isShortName = computed(() => {
  return props.hotel.name.length <= 15
})
</script>