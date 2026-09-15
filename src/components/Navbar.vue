<template>
  <nav class="fixed top-0 left-0 z-40 w-full overflow-hidden bg-blue-600 shadow-md">
    
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-4 lg:px-2 ">

      <!-- Logo -->
      <RouterLink
        to="/"
        class="flex items-center"
      >
        <Logo dark />
      </RouterLink>


      <!-- Desktop Menu -->
      <div class="hidden items-center gap-1 lg:flex xl:gap-5">

        <RouterLink
          to="/"

          class="rounded-lg px-2 py-2 font-medium text-white transition hover:scale-110 focus:text-black xl:px-3"
        >
          {{ t("Home") }}
        </RouterLink>

        <RouterLink
          to="/hotel"
          active-class=""
          exact-active-class="text-black"
          class="rounded-lg px-2 py-2 font-medium text-white transition hover:scale-110 focus:text-black xl:px-3"
        >
          {{ t("Hotel") }}
        </RouterLink>

        <RouterLink
          to="/explore"
          active-class="text-black"
          class="rounded-lg px-2 py-2 font-medium text-white transition hover:scale-110 focus:text-black xl:px-3"
        >
          {{ t("Explore") }}
        </RouterLink>

        <RouterLink
          to="/promotion"
          active-class="text-black"
          class="rounded-lg px-2 py-2 font-medium text-white transition hover:scale-110 focus:text-black xl:px-3"
        >
          {{ t("Promotion") }}
        </RouterLink>

        <RouterLink
          to="/my-booking"
          active-class="text-black"
          class="rounded-lg px-2 py-2 font-medium text-white transition hover:scale-110 focus:text-black xl:px-3"
        >
          {{ t("My Booking") }}
        </RouterLink>

        <RouterLink
          to="/about"
          active-class="text-black"
          class="rounded-lg px-2 py-2 font-medium text-white transition hover:scale-110 focus:text-black xl:px-3"
        >
          {{ t("About Us") }}
        </RouterLink>

        <RouterLink
          to="/contact"
          active-class="text-black"
          class="rounded-lg px-2 py-2 font-medium text-white transition hover:scale-110 focus:text-black xl:px-3"
        >
          {{ t("Contact Us") }}
        </RouterLink>

      </div>

      <!-- My Account (right edge, near border) -->
      <div class="flex items-center gap-3">

        <!-- Language Toggle -->
        <button
          @click="toggleLocale"
          class="flex items-center gap-1 rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          :title="t('Khmer')"
        >
          <i class="bi bi-globe2"></i>
          <span>{{ locale === "en" ? t("ខ្មែរ") : t("English") }}</span>
        </button>

        <RouterLink
          to="/my-account"
          active-class="bg-blue-100 ring-2 ring-blue-300"
          class="hidden items-center rounded-full bg-white px-4 py-2 font-medium text-blue-800 shadow-sm transition hover:scale-105 lg:flex"
        >
          {{ displayName }}
        </RouterLink>


      <!-- Mobile Menu Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="rounded-lg p-2 text-white hover:bg-blue-700 lg:hidden"
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
      class="border-t border-blue-200 bg-white p-2 lg:hidden"
    >
      <div class="flex flex-col ">

        <RouterLink
          to="/"
          @click="isMenuOpen = false" 
          exact-active-class="bg-blue-200"
          class="m-1 px-4 py-3 rounded-2xl font-medium text-blue-800 hover:bg-blue-200 active:scale-105 hover:border-blue-300 "
        >
          {{ t("Home") }}
        </RouterLink>

        <RouterLink
          to="/hotel"
          @click="isMenuOpen = false"
          active-class=""
          exact-active-class="bg-blue-200"
          class="m-1 px-4 py-3 rounded-2xl font-medium text-blue-800 hover:bg-blue-200 active:scale-105"
        >
          {{ t("Hotel") }}
        </RouterLink>

        <RouterLink
          to="/explore"
          @click="isMenuOpen = false"
          active-class="bg-blue-200"
          class="m-1 px-4 py-3 rounded-2xl font-medium text-blue-800 hover:bg-blue-200 active:scale-105"
        >
          {{ t("Explore") }}
        </RouterLink>

        <RouterLink
          to="/promotion"
          @click="isMenuOpen = false"
          active-class="bg-blue-200 "
          class="m-1 px-4 py-3 rounded-2xl font-medium text-blue-800 hover:bg-blue-200 active:scale-105"
        >
          {{ t("Promotion") }}
        </RouterLink>

        <RouterLink
          to="/my-booking"
          @click="isMenuOpen = false"
          active-class="bg-blue-200 "
          class="m-1 px-4 py-3 rounded-2xl font-medium text-blue-800 hover:bg-blue-200 active:scale-105"
        >
          {{ t("My Booking") }}
        </RouterLink>

        <RouterLink
          to="/about"
          @click="isMenuOpen = false"
          active-class="bg-blue-200 "
          class="m-1 px-4 py-3 rounded-2xl font-medium text-blue-800 hover:bg-blue-200 active:scale-105"
        >
          {{ t("About Us") }}
        </RouterLink>

        <RouterLink
          to="/contact"
          @click="isMenuOpen = false"
          active-class="bg-blue-200 "
          class="m-1 px-4 py-3 rounded-2xl font-medium text-blue-800 hover:bg-blue-200 active:scale-105"
        >
          {{ t("Contact Us") }}
        </RouterLink>

        <RouterLink
          to="/my-account"
          @click="isMenuOpen = false"
          active-class="bg-blue-200 "
          class="m-1 px-4 py-3 rounded-2xl font-medium text-blue-800 hover:bg-blue-200 active:scale-105"
        >
          {{ displayName }}
        </RouterLink>

        <button
          @click="isMenuOpen = false; toggleLocale()"
          class="px-4 py-3 font-medium text-blue-800 hover:bg-blue-100 hover:scale-105"
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
import { ref, computed, onMounted, onUnmounted, watch } from "vue"
import { useRoute } from "vue-router"
import Logo from "./Logo.vue"
import { currentUser } from "../store/user"
import { locale, toggleLocale, t } from "../i18n"

const isMenuOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isMenuOpen.value = false
  }
}

onMounted(() => window.addEventListener("resize", handleResize))
onUnmounted(() => window.removeEventListener("resize", handleResize))

const displayName = computed(() => {
  if (!currentUser.value) return t("My Account")
  const first = currentUser.value.name.split(" ")[0]
  return first ? first : t("My Account")
})
</script>