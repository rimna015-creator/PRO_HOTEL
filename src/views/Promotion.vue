<template>
  <div class="px-6 pb-10 pt-24">

    <h1 class="text-center text-3xl font-bold text-gray-800">
      {{ t("Promotions & Festival Packages") }}
    </h1>

    <p class="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600">
      {{ t("Celebrate Cambodian festivals with special hotel packages! Each promotion includes exclusive discounts, available on set dates only. Book early to secure your spot.") }}
    </p>

    <div v-if="promotions.length" class="mt-10 flex flex-wrap justify-center gap-6">
      <PromotionCard
        v-for="promo in promotions"
        :key="promo.id"
        :promotion="promo"
      />
    </div>

    <div v-else class="flex flex-col items-center justify-center py-20 text-center">
      <i class="bi bi-ticket-perforated text-5xl text-gray-400"></i>
      <h2 class="mt-4 text-xl font-semibold text-gray-800">
        {{ t("No promotions right now") }}
      </h2>
      <p class="mt-2 text-sm text-gray-500">
        {{ t("Check back soon for new festival packages!") }}
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import PromotionCard from "../components/PromotionCard.vue"
import { promotions } from "../Data/Promotion"
import { t } from "../i18n"
</script>