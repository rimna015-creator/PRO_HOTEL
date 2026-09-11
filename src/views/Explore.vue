<template>
  <div class="px-6 pb-10 pt-24">

    <!-- Hero / Description Section -->
    <section class="mx-auto max-w-4xl text-center">
      <h1 class="text-4xl font-bold text-gray-700">
        Explore Siem Reap
      </h1>
      <p class="mt-2 text-sm font-medium uppercase tracking-widest text-amber-600">
        Cambodia
      </p>
      <p class="mt-4 leading-relaxed text-gray-600">
        Siem Reap, meaning "Defeat of Siam," is the gateway to the legendary Angkor region
        — home to some of the most spectacular ancient temples on Earth. Nestled in
        northwestern Cambodia, this charming city blends centuries-old Khmer heritage with
        a vibrant modern culture. From the awe-inspiring Angkor Wat at sunrise to the
        bustling night markets and floating villages of Tonle Sap, Siem Reap offers an
        unforgettable journey through history, nature, and Cambodian hospitality.
      </p>
    </section>

    <!-- Filter Chips -->
    <div class="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
      <button
        v-for="cat in categories"
        :key="cat"
        class="rounded-full border px-4 py-1.5 text-sm font-medium transition duration-300"
        :class="
          activeCategory === cat
            ? 'bg-blue-600 border-blue-600 text-white'
            : 'border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600'
        "
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Places Grid -->
    <div
      v-if="filteredPlaces.length"
      class="mx-auto mt-8 grid max-w-6xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="place in filteredPlaces"
        :key="place.id"
        class="w-full max-w-[360px] overflow-hidden rounded-xl  shadow-xl bg-gray-200 transition duration-300 hover:-translate-y-1 "
      >
        <!-- Place Image -->
        <img
          :src="place.image"
          :alt="place.name"
          class="h-[210px] w-full object-cover"
        />

        <div class="p-5">

          <!-- Category Badge -->
          <span class="inline-block rounded-full bg-amber-100 px-3 py-0.5 text-xs font-semibold text-amber-700">
            {{ place.category }}
          </span>

          <!-- Place Name -->
          <h2 class="mt-2 text-xl font-semibold text-gray-800">
            {{ place.name }}
          </h2>

          <!-- Rating -->
          <p class="mt-1 text-sm text-gray-700">
            <i class="bi bi-star-fill text-yellow-500"></i>
            <span class="font-semibold">{{ place.rating }}</span>
          </p>

          <!-- Description -->
          <p class="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-3">
            {{ place.description }}
          </p>

          <!-- Info Row -->
          <div class="mt-4 space-y-2 text-sm text-gray-600">
            <p>
              <i class="bi bi-clock mr-1 text-blue-600"></i>
              {{ place.openHours }}
            </p>
            <p>
              <i class="bi bi-ticket mr-1 text-blue-600"></i>
              {{ place.ticketPrice }}
            </p>
            <p>
              <i class="bi bi-geo-alt-fill mr-1 text-blue-600"></i>
              {{ place.location }}
            </p>
          </div>

          <!-- Google Maps Button -->
          <button
            class="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition duration-300 hover:bg-blue-700"
            @click="openGoogleMaps(place)"
          >
            <i class="bi bi-map"></i>
            View on Map
          </button>

        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="flex flex-col items-center justify-center py-20 text-center">
      <i class="bi bi-search text-5xl text-gray-400"></i>
      <h2 class="mt-4 text-xl font-semibold text-gray-800">
        No places found
      </h2>
      <p class="mt-2 text-sm text-gray-500">
        Try selecting a different category.
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { places, type Place } from "../Data/Explore"

const activeCategory = ref("All")

const categories = computed(() => {
  const cats = [...new Set(places.map((p) => p.category))]
  return ["All", ...cats]
})

const filteredPlaces = computed(() => {
  if (activeCategory.value === "All") return places
  return places.filter((p) => p.category === activeCategory.value)
})

const openGoogleMaps = (place: Place) => {
  const query = encodeURIComponent(`${place.name} ${place.location}`)
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank")
}
</script>
