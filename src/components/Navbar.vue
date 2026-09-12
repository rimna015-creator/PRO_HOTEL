<template>
  <nav class="fixed top-0 left-0 z-40 w-full overflow-hidden bg-blue-500 shadow-md">
    
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-4 lg:px-2">

      <!-- Website Name -->
      <RouterLink
        to="/"
      >
      <span class="text-2xl font-bold text-blue-900 font-sans">Angkor</span>
      <span class="text-sm text-white font-semibold">Booking.</span>
      </RouterLink>


      <!-- Desktop Menu -->
      <div class="hidden items-center gap-8 md:flex">

        <RouterLink
          to="/"
          exact-active-class="bg-blue-600 text-white hover:bg-blue-600"
          class="font-medium text-white transition  hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          {{ t("Home") }}
        </RouterLink>

        <RouterLink
          to="/hotel"
          active-class="bg-blue-600 text-white hover:bg-blue-600"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          {{ t("Hotel") }}
        </RouterLink>

        <RouterLink
          to="/explore"
          active-class="bg-blue-600 text-white hover:bg-blue-600"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          {{ t("Explore") }}
        </RouterLink>

        <RouterLink
          to="/promotion"
          active-class="bg-blue-600 text-white hover:bg-blue-600"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          {{ t("Promotion") }}
        </RouterLink>

        <RouterLink
          to="/my-booking"
          active-class="bg-blue-600 text-white hover:bg-blue-600"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          {{ t("My Booking") }}
        </RouterLink>

      </div>

      <!-- My Account (right edge, near border) -->
      <div class="flex items-center gap-3">

        <!-- Language Toggle -->
        <button
          @click="toggleLocale"
          class="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          :title="t('Khmer')"
        >
          <i class="bi bi-globe2"></i>
          <span>{{ locale === "en" ? t("ខ្មែរ") : t("English") }}</span>
        </button>

        <RouterLink
          to="/my-account"
          active-class="bg-blue-50 ring-2 ring-blue-300"
          class="hidden items-center rounded-full bg-white px-4 py-2 font-medium text-blue-700 shadow-sm transition hover:scale-105 md:flex"
        >
          {{ displayName }}
        </RouterLink>


      <!-- Mobile Menu Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="rounded-lg p-2 text-white hover:bg-blue-700 md:hidden"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

    </div>
    </div>


    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
    <div
      v-if="isMenuOpen"
      class="border-t border-blue-500 bg-white md:hidden p-2 "
    >
      <div class="flex flex-col ">

        <RouterLink
          to="/"
          @click="isMenuOpen = false" 
          exact-active-class="bg-blue-500 text-white"
          class="m-1 px-4 py-3 rounded-2xl font-medium text-black hover:bg-blue-500 active:scale-105 hover:border-blue-900 "
        >
          {{ t("Home") }}
        </RouterLink>

        <RouterLink
          to="/hotel"
          @click="isMenuOpen = false"
          active-class="bg-blue-500 text-white "
          class="m-1 px-4 py-3 rounded-2xl font-medium text-black hover:bg-blue-500 active:scale-105"
        >
          {{ t("Hotel") }}
        </RouterLink>

        <RouterLink
          to="/explore"
          @click="isMenuOpen = false"
          active-class="bg-blue-500 text-white"
          class="m-1 px-4 py-3 rounded-2xl font-medium text-black hover:bg-blue-500 active:scale-105"
        >
          {{ t("Explore") }}
        </RouterLink>

        <RouterLink
          to="/promotion"
          @click="isMenuOpen = false"
          active-class="bg-blue-500 text-white"
          class="m-1 px-4 py-3 rounded-2xl font-medium text-black hover:bg-blue-500 active:scale-105"
        >
          {{ t("Promotion") }}
        </RouterLink>

        <RouterLink
          to="/my-booking"
          @click="isMenuOpen = false"
          active-class="bg-blue-500 text-white"
          class="m-1 px-4 py-3 rounded-2xl font-medium text-black hover:bg-blue-500 active:scale-105"
        >
          {{ t("My Booking") }}
        </RouterLink>

        <RouterLink
          to="/my-account"
          @click="isMenuOpen = false"
          active-class="bg-blue-500 text-white"
          class="m-1 px-4 py-3 rounded-2xl font-medium text-black hover:bg-blue-500 active:scale-105"
        >
          {{ displayName }}
        </RouterLink>

        <button
          @click="isMenuOpen = false; toggleLocale()"
          class="px-4 py-3 font-medium text-black hover:bg-blue-500 hover:scale-105"
        >
          <i class="bi bi-globe2 mr-2"></i>
          {{ locale === "en" ? t("Khmer") : t("English") }}
        </button>

      </div>
    </div>
    </transition>

  </nav>
</template>


<script setup lang="ts">
import { ref, computed } from "vue"
import { currentUser } from "../store/user"
import { locale, toggleLocale, t } from "../i18n"

const isMenuOpen = ref(false)

const displayName = computed(() => {
  if (!currentUser.value) return t("My Account")
  const first = currentUser.value.name.split(" ")[0]
  return first ? first : t("My Account")
})
</script>