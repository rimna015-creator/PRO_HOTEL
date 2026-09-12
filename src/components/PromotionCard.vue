<template>
  <div
    class="w-[320px] overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-blue-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  >

    <!-- Promotion Image -->
    <div class="relative">
      <img
        :src="promotion.image"
        :alt="promotion.title"
        class="h-[200px] w-full object-cover"
      />
      <span class="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-black">
        {{ t("discount") }} {{ promotion.discount }}%
      </span>
      <span class="absolute right-3 top-3 rounded-full bg-blue-700 px-3 py-1 text-xs font-medium text-white">
        <i class="bi bi-stars mr-1"></i>
        {{ promotion.festival }}
      </span>
    </div>

    <div class="p-[18px]">

      <!-- Title + Hotel -->
      <h2 class="mb-1 text-xl font-semibold text-black">
        {{ promotion.title }}
      </h2>
      <p class="flex items-center gap-1 text-sm text-black">
        <i class="bi bi-building"></i>
        {{ promotion.hotelName }}
        <span class="text-black">•</span>
        <span class="text-black">{{ promotion.location }}</span>
      </p>

      <!-- Description -->
      <p class="mt-2 text-sm leading-relaxed text-black">
        {{ promotion.description }}
      </p>

      <!-- What's Included -->
      <ul class="mt-3 flex flex-wrap gap-1.5">
        <li
          v-for="item in promotion.includes"
          :key="item"
          class="flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-black"
        >
          <i class="bi bi-check-circle-fill"></i>
          {{ item }}
        </li>
      </ul>

      <!-- Available Days -->
      <div class="mt-4 flex flex-wrap items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm text-black ring-1 ring-blue-200">
        <i class="bi bi-calendar-check-fill text-blue-500"></i>
        <span>
          {{ formatDate(promotion.availableFrom) }} – {{ formatDate(promotion.availableTo) }}
        </span>
        <span class="ml-auto rounded-md bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
          {{ promotion.durationNights }} {{ t("nights") }}
        </span>
      </div>

      <!-- Price + Action -->
      <div class="mt-4 flex items-end justify-between">
        <div>
          <span class="text-sm text-black line-through">${{ promotion.normalPrice }}</span>
          <span class="ml-1 text-[22px] font-bold text-black">
            ${{ promotion.packagePrice }}
          </span>
          <span class="text-sm text-black">{{ t("/ night") }}</span>
        </div>
        <router-link
          :to="'/hotel/' + promotion.hotelId"
          class="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-blue-700"
        >
          {{ t("View Hotel") }}
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { Promotion } from "../Data/Promotion"
import { t } from "../i18n"

const props = defineProps<{
  promotion: Promotion
}>()

const formatDate = (date: string) => {
  const d = new Date(date + "T00:00:00")
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  })
}
</script>