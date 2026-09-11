<template>
  <nav class="fixed top-0 left-0 z-40 w-full bg-blue-800 shadow-md">
    
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-4 lg:px-2">

      <!-- Website Name -->
      <RouterLink
        to="/"
      >
      <span class="text-2xl font-bold text-yellow-400 font-sans">Angkor</span>
      <span class="text-sm text-white font-serif">Booking.</span>
      </RouterLink>


      <!-- Desktop Menu -->
      <div class="hidden items-center gap-8 md:flex">

        <RouterLink
          to="/"
          exact-active-class="bg-yellow-500 text-blue-900 hover:bg-yellow-500"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/hotel"
          active-class="bg-yellow-500 text-blue-900 hover:bg-yellow-500"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          Hotel
        </RouterLink>

        <RouterLink
          to="/explore"
          active-class="bg-yellow-500 text-blue-900 hover:bg-yellow-500"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          Explore
        </RouterLink>

        <RouterLink
          to="/promotion"
          active-class="bg-yellow-500 text-blue-900 hover:bg-yellow-500"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          Promotion
        </RouterLink>

        <RouterLink
          to="/my-booking"
          active-class="bg-yellow-500 text-blue-900 hover:bg-yellow-500"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          My Booking
        </RouterLink>

      </div>

      <!-- My Account (right edge, near border) -->
      <div class="flex items-center gap-3">

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
    <div
      v-if="isMenuOpen"
      class="border-t border-blue-500 bg-white md:hidden"
    >
      <div class="flex flex-col ">

        <RouterLink
          to="/"
          @click="isMenuOpen = false"
          exact-active-class="bg-blue-500 text-white"
          class=" px-4 py-3 font-medium text-black hover:bg-blue-500 hover:scale-105 "
        >
          Home
        </RouterLink>

        <RouterLink
          to="/hotel"
          @click="isMenuOpen = false"
          active-class="bg-blue-500 text-white"
          class=" px-4 py-3 font-medium text-black hover:bg-blue-500 hover:scale-105"
        >
          Hotel
        </RouterLink>

        <RouterLink
          to="/explore"
          @click="isMenuOpen = false"
          active-class="bg-blue-500 text-white"
          class=" px-4 py-3 font-medium text-black hover:bg-blue-500 hover:scale-105"
        >
          Explore
        </RouterLink>

        <RouterLink
          to="/promotion"
          @click="isMenuOpen = false"
          active-class="bg-blue-500 text-white"
          class=" px-4 py-3 font-medium text-black hover:bg-blue-500 hover:scale-105"
        >
          Promotion
        </RouterLink>

        <RouterLink
          to="/my-booking"
          @click="isMenuOpen = false"
          active-class="bg-blue-500 text-white"
          class=" px-4 py-3 font-medium text-black hover:bg-blue-500 hover:scale-105"
        >
          My Booking
        </RouterLink>

        <RouterLink
          to="/my-account"
          @click="isMenuOpen = false"
          active-class="bg-blue-500 text-white"
          class="px-4 py-3 font-medium text-black hover:bg-blue-500 hover:scale-105"
        >
          {{ displayName }}
        </RouterLink>

      </div>
    </div>

  </nav>
</template>


<script setup lang="ts">
import { ref, computed } from "vue"
import { currentUser } from "../store/user"

const isMenuOpen = ref(false)

const displayName = computed(() => {
  if (!currentUser.value) return "My Account"
  const first = currentUser.value.name.split(" ")[0]
  return first ? first : "My Account"
})
</script>