<template>
  <div class="px-6 pb-10 pt-24">

    <h1 class="text-center text-3xl font-bold text-gray-800">
      Hotels in Siem Reap
    </h1>

    <p v-if="checkIn && checkOut" class="mt-2 text-center text-sm text-gray-600">
      Showing hotels available from
      <strong>{{ formatDate(checkIn) }}</strong>
      to
      <strong>{{ formatDate(checkOut) }}</strong>
      ({{ filteredHotels.length }} found)
    </p>

    <!-- Filter Chips -->
    <div class="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-1">
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

    <div v-if="filteredHotels.length" class="flex flex-wrap justify-center gap-6 mt-3">
      <HotelCard
        v-for="hotel in filteredHotels"
        :key="hotel.id + hotel.reviewer"
        :hotel="hotel"
      />
    </div>

    <div v-else class="flex flex-col items-center justify-center py-20 text-center">
      <i class="bi bi-calendar-x text-5xl text-gray-400"></i>
      <h2 class="mt-4 text-xl font-semibold text-gray-800">
        No hotels available for these dates
      </h2>
      <p class="mt-2 text-sm text-gray-500">
        Try changing your check-in and check-out dates.
      </p>
      <RouterLink
        to="/"
        class="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
      >
        Search Again
      </RouterLink>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import HotelCard from "../components/HotelCard.vue"
import { hotels } from "../Data/Hotel"

const route = useRoute()

const checkIn = computed(() => (route.query.checkin as string) || "")
const checkOut = computed(() => (route.query.checkout as string) || "")

const availableHotels = computed(() => {
  const ci = checkIn.value
  const co = checkOut.value
  if (!ci || !co) return hotels
  return hotels.filter(
    (h) => !h.bookings.some((b) => ci < b.checkOut && co > b.checkIn)
  )
})

const activeCategory = ref("All")

const categories = computed(() => {
  const cats = [...new Set(hotels.map((h) => h.type))]
  return ["All", ...cats]
})

const filteredHotels = computed(() => {
  if (activeCategory.value === "All") return availableHotels.value
  return availableHotels.value.filter(
    (h) => h.type === activeCategory.value
  )
})

const formatDate = (date: string) => {
  const d = new Date(date + "T00:00:00")
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  })
}
</script>