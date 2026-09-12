<template>
  <div
    class="w-[320px] overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-blue-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  >

    <!-- Hotel Image -->
    <div class="relative">
      <img
        :src="hotel.image"
        :alt="hotel.name"
        class="h-[200px] w-full object-cover"
      />
      <button
        @click="handleFavorite"
        class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow transition duration-200 hover:scale-110"
        :aria-label="isFav ? t('Remove from favorites') : t('Add to favorites')"
      >
        <i
          class="text-lg"
          :class="isFav ? 'bi bi-heart-fill text-red-500' : 'bi bi-heart text-blue-600'"
        ></i>
      </button>
    </div>

    <div class="p-[18px]">

      <!-- Hotel Name + Stars -->
      <div class="mb-2 flex items-center justify-between gap-2">
        <h2 class="text-lg font-semibold text-black">
          {{ hotel.name }}
        </h2>

        <!-- Stars -->
        <span class="flex shrink-0 items-center gap-1 text-sm text-amber-500">
          <i class="bi bi-star-fill"></i>
          {{ hotel.stars }}
        </span>
      </div>
      
      <!-- Hotel Type -->
      <div class="mb-2 flex items-center gap-3">
        <span class="text-sm font-medium text-black">
          {{ hotel.type }}
        </span>
      </div>

      <!-- Rating + Number of Reviews -->
      <p class="mb-3 text-sm text-black">
        <i class="bi bi-star-fill text-amber-500"></i>
        <span class="font-semibold">
          {{ hotel.rating }}
        </span>
        <span class="text-blue-500">
          ({{ hotel.reviewer }} {{ t("reviews") }})
        </span>
      </p>

      <!-- Price -->
      <div class="mb-3">
        <strong class="text-[22px] font-bold text-blue-900">
          ${{ hotel.price }}
        </strong>

        <span class="text-sm text-blue-500">
          {{ t("/ night") }}
        </span>
      </div>

      <!-- Location -->
      <div class="mb-4 flex items-center justify-between">
        <p class="text-sm text-black">
          <i class="bi bi-geo-alt-fill mr-1 text-blue-500"></i>
          {{ hotel.location }}
        </p>

        <!-- Google Maps Button -->
        <button
          class="flex items-center gap-1 rounded-lg bg-blue-300 px-3 py-1.5 text-xs font-medium text-black transition duration-300 "
          @click="openGoogleMaps"
        >
          <i class="bi bi-map"></i>
          {{ t("Location") }}
        </button>
      </div>

      <!-- View Details + Book Now Buttons -->
      <div class="flex gap-2">
        <router-link
          :to="'/hotel/' + hotel.id"
          class="flex-1 rounded-lg bg-blue-500 px-4 py-2.5 text-center font-medium text-white transition duration-300 hover:bg-blue-600"
        >
          {{ t("View Details") }}
        </router-link>
        <router-link
          :to="'/hotel/' + hotel.id + '/book'"
          class="flex-1 rounded-lg bg-green-600 px-4 py-2.5 text-center font-medium text-white transition duration-300 hover:bg-green-700"
        >
          {{ t("Book Now") }}
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import type { Hotel } from "../Data/Hotel"
import { isFavorite, toggleFavorite } from "../store/favorite"
import { isLoggedIn } from "../store/user"
import { openLogin } from "../store/ui"
import { t } from "../i18n"

const props = defineProps<{
  hotel: Hotel
}>()

const isFav = computed(() => isFavorite(props.hotel.id))

const handleFavorite = () => {
  if (!isLoggedIn.value) {
    openLogin()
    return
  }
  toggleFavorite(props.hotel.id)
}

const openGoogleMaps = () => {
  const query = encodeURIComponent(`${props.hotel.name} ${props.hotel.location}`)
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank")
}
</script>