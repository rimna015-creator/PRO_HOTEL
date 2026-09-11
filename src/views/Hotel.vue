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
      ({{ availableHotels.length }} found)
    </p>

    <div v-if="availableHotels.length" class="flex flex-wrap justify-center gap-6">
      <HotelCard
        v-for="hotel in availableHotels"
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
import { computed } from "vue"
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