<template>
  <div class="min-h-screen bg-blue-50 px-6 pb-10 pt-24">

    <h1 class="text-center text-3xl font-bold text-blue-900">
      {{ t("Hotels in Siem Reap") }}
    </h1>

    <p v-if="checkIn && checkOut" class="mt-2 text-center text-sm text-blue-600">
      {{ t("Showing hotels available from") }}
      <strong>{{ formatDate(checkIn) }}</strong>
      {{ t("to") }}
      <strong>{{ formatDate(checkOut) }}</strong>
      ({{ filteredHotels.length }} {{ t("found") }})
    </p>

    <!-- Search Bar -->
    <div class="mx-auto mt-6 max-w-md">
      <div class="relative">
        <i class="bi bi-search pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"></i>
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="t('Search hotels...')"
          class="w-full rounded-full border border-blue-200 py-2.5 pl-10 pr-4 text-sm text-blue-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
        />
      </div>
    </div>

    <p class="mt-4 text-center text-sm text-blue-600">
      <template v-if="Number(activeStars) !== 0">
        {{ t("Showing") }}
        <strong>{{ filteredHotels.length }}</strong>
        {{ t("hotels") }}
        <i class="bi bi-star-fill text-amber-500"></i>
        {{ activeStars }} {{ t("Star") }}
      </template>
      <template v-else>
        {{ t("Showing") }}
        <strong>{{ filteredHotels.length }}</strong>
        {{ t("hotels") }}
        <template v-if="activeCategory !== 'All'">
          - {{ activeCategory }}
        </template>
      </template>
    </p>

    <!-- Star Filter Chips -->
    <div class="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-1">
      <button
        v-for="star in starLevels"
        :key="star.label"
        class="rounded-full border px-4 py-1.5 text-sm font-medium transition duration-300"
        :class="
          isStarActive(star.value)
            ? 'bg-blue-700 border-blue-700 text-white'
            : 'border-blue-200 text-blue-600 hover:border-blue-400 hover:text-blue-700'
        "
        @click="selectStars(star.value)"
      >
        <template v-if="star.value === 0">
          {{ t(star.label) }}
        </template>
        <template v-else>
          <i class="bi bi-star-fill mr-1"></i>{{ t(star.label) }}
        </template>
      </button>
    </div>

    <!-- Filter Chips -->
    <div class="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-1">
      <button
        v-for="cat in categories"
        :key="cat"
        class="rounded-full border px-4 py-1.5 text-sm font-medium transition duration-300"
        :class="
          activeCategory === cat
            ? 'bg-blue-700 border-blue-700 text-white'
            : 'border-blue-200 text-blue-600 hover:border-blue-400 hover:text-blue-700'
        "
        @click="setCategory(cat)"
      >
        {{ cat }}
      </button>
    </div>

    <div v-if="filteredHotels.length" class="mx-auto mt-8 grid max-w-6xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <HotelCard
        v-for="hotel in filteredHotels"
        :key="hotel.id + hotel.reviewer"
        :hotel="hotel"
        class="w-full max-w-[360px] overflow-hidden rounded-xl shadow-xl bg-white ring-1 ring-blue-200 transition duration-300 hover:-translate-y-1"
      />
    </div>

    <div v-else class="flex flex-col items-center justify-center py-20 text-center">
      <i class="bi bi-calendar-x text-5xl text-blue-400"></i>
      <h2 class="mt-4 text-xl font-semibold text-blue-800">
        {{ t("No hotels available for these dates") }}
      </h2>
      <p class="mt-2 text-sm text-blue-500">
        {{ t("Try changing your check-in and check-out dates.") }}
      </p>
      <RouterLink
        to="/"
        class="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
      >
        {{ t("Search Again") }}
      </RouterLink>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import HotelCard from "../components/HotelCard.vue"
import { hotels } from "../Data/Hotel"
import { t } from "../i18n"

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
const activeStars = ref(0)
const searchQuery = ref("")

const selectStars = (value: number) => {
  if (activeStars.value !== value) {
    activeCategory.value = "All"
  }
  activeStars.value = Number(value)
}

const setCategory = (cat: string) => {
  activeCategory.value = cat
}

const isStarActive = (value: number) => {
  return Number(activeStars.value) === Number(value)
}

const starLevels = [
  { value: 0, label: "All Stars" },
  { value: 2, label: "2 Star" },
  { value: 3, label: "3 Star" },
  { value: 4, label: "4 Star" },
  { value: 5, label: "5 Star" }
]

const categories = computed(() => {
  const cats = [...new Set(hotels.map((h) => h.type))]
  return ["All", ...cats]
})

const filteredHotels = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const selectedStars = Number(activeStars.value)
  const selectedCategory = activeCategory.value

  let result = availableHotels.value

  if (selectedCategory !== "All") {
    result = result.filter((h) => h.type === selectedCategory)
  }

  if (selectedStars !== 0) {
    result = result.filter((h) => Number(h.stars) === selectedStars)
  }

  if (query) {
    result = result.filter(
      (h) =>
        h.name.toLowerCase().includes(query) ||
        h.location.toLowerCase().includes(query)
    )
  }

  return result
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