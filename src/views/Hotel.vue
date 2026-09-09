<template>
  <div class="px-6 pb-10 pt-24">

    <h1 class="mb-6 text-3xl font-bold text-gray-800">
      Hotels in Siem Reap
    </h1>

    <div class="flex flex-wrap gap-6">
      <HotelCard
        v-for="hotel in hotels"
        :key="hotel.id"
        :hotel="hotel"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import HotelCard from "../components/HotelCard.vue"
import { hotels } from "../Data/Hotel"
</script>