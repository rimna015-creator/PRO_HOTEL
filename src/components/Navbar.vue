<template>
  <nav class="fixed top-0 left-0 z-40 w-full bg-blue-600 shadow-md">
    
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

      <!-- Website Name -->
      <RouterLink
        to="/"
        class="text-2xl font-bold text-white"
      >
        AngkorBooking
      </RouterLink>


      <!-- Desktop Menu -->
      <div class="hidden items-center gap-8 md:flex">

        <RouterLink
          to="/"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/hotel"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          Hotel
        </RouterLink>

        <RouterLink
          to="/explore"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          Explore
        </RouterLink>

        <RouterLink
          to="/my-booking"
          class="font-medium text-white transition hover:bg-blue-400 rounded-lg px-4 py-2"
        >
          My Booking
        </RouterLink>

        <RouterLink
          to="/my-account"
          class="rounded-lg bg-white px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-50"
        >
          My Account
        </RouterLink>

      </div>


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


    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="border-t border-blue-500 bg-white md:hidden"
    >
      <div class="flex flex-col ">

        <RouterLink
          to="/"
          @click="isMenuOpen = false"
          class=" px-4 py-3 font-medium text-black hover:bg-blue-500 hover:scale-105 "
        >
          Home
        </RouterLink>

        <RouterLink
          to="/hotel"
          @click="isMenuOpen = false"
          class=" px-4 py-3 font-medium text-black hover:bg-blue-500 hover:scale-105"
        >
          Hotel
        </RouterLink>

        <RouterLink
          to="/explore"
          @click="isMenuOpen = false"
          class=" px-4 py-3 font-medium text-black hover:bg-blue-500 hover:scale-105"
        >
          Explore
        </RouterLink>

        <RouterLink
          to="/my-booking"
          @click="isMenuOpen = false"
          class=" px-4 py-3 font-medium text-black hover:bg-blue-500 hover:scale-105"
        >
          My Booking
        </RouterLink>

        <RouterLink
          to="/my-account"
          @click="isMenuOpen = false"
          class="px-4 py-3 font-medium text-black hover:bg-blue-500 hover:scale-105 "
        >
          My Account
        </RouterLink>

      </div>
    </div>

  </nav>
</template>


<script setup lang="ts">
import { ref } from "vue"

const isMenuOpen = ref(false)
</script>