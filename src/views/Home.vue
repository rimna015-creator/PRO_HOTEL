<template>
  <div class="min-h-screen">

    <!-- Hero Banner -->
    <div class="relative h-[85vh] w-full overflow-hidden ">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLINieTWE6q9ncqTgoCq3HCejICZllGwvjwzDAaygB1c_EUTc2GpuEGA&s=10"
        alt="Angkor Wat Temple, Siem Reap"
        class="h-full w-full object-cover "
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>

      <!-- Banner Text Content -->
      <div class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
      
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Welcome to <span class="text-amber-400">BookingHotel</span>
        </h1>
        <p class="mb-8 max-w-xl text-base text-slate-200 sm:text-lg">
          Discover and book top-rated accommodations near ancient temples and vibrant local sights.
        </p>
        <span class="mb-3 text-sm font-sans uppercase tracking-widest text-amber-400">
          Find the beautiful places in Siem Reap
        </span>
        <router-link
          to="/explore"
          class="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-8 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition-all duration-200  active:scale-95"
        >
          Explore Siem Reap
          <i class="bi bi-compass"></i>
        </router-link>
      </div>
    </div>

    <!-- Floating Search Bar Card -->
    <div class="relative z-10 mx-auto -mt-16 max-w-5xl px-6">
      <div class="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 sm:p-8">
        <h2 class="mb-6 text-xl font-bold text-slate-900">
          Search Available Hotels
        </h2>

        <form @submit.prevent="searchHotels" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
          
          <!-- Check-in -->
          <div>
            <label for="checkin" class="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Check-in
            </label>
            <input
              id="checkin"
              v-model="checkIn"
              type="date"
              class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-800 transition focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          <!-- Check-out -->
          <div>
            <label for="checkout" class="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Check-out
            </label>
            <input
              id="checkout"
              v-model="checkOut"
              type="date"
              :min="checkIn || undefined"
              class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-800 transition focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          <!-- Guests -->
          <div>
            <label class="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Guests
            </label>
            <select
              v-model="guests"
              class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-800 transition focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="flex items-center justify-center gap-2 rounded-lg bg-amber-300 px-6 py-2.5 font-semibold text-slate-950 shadow-md transition duration-200 hover:bg-amber-400 active:scale-95"
          >
            <i class="bi bi-search"></i>
            Search
          </button>
        </form>

        <p v-if="error" class="mt-4 flex items-center gap-2 text-sm font-medium text-rose-600">
          <i class="bi bi-exclamation-circle-fill"></i>
          {{ error }}
        </p>
      </div>
    </div>

    <!-- Featured Hotels (Horizontal Carousel / Scroll Container) -->
    <section class="mx-auto max-w-7xl px-6 py-20">
      <div class="mb-8 flex items-end justify-between">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-slate-900">Featured Hotels</h2>
          <p class="mt-1 text-slate-500">Hand-picked stays loved by our guests</p>
        </div>
        
        <!-- Optional Navigation Hint or Buttons -->
        <RouterLink
          to="/hotel"
          class="hidden items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 sm:flex"
        >
          View all
          <i class="bi bi-arrow-right"></i>
        </RouterLink>
      </div>

      <!-- Horizontal Scrollable Box -->
      <div class="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-300">
        <div
          v-for="hotel in featuredHotels"
          :key="hotel.id + hotel.reviewer"
          class="w-[280px] shrink-0 snap-start sm:w-[320px] md:w-[350px]"
        >
          <HotelCard :hotel="hotel" class="h-full shadow-sm hover:shadow-md transition-shadow" />
        </div>
      </div>

      <div class="mt-8 text-center sm:hidden">
        <RouterLink
          to="/hotel"
          class="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View All Hotels
          <i class="bi bi-arrow-right"></i>
        </RouterLink>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 text-white">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold tracking-tight text-black">Why Book With Us?</h2>
          <p class="mt-2 text-gray-600">Everything you need for a seamless trip to Siem Reap</p>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-xl bg-gray-700 p-6 text-center ring-1 ">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
              <i class="bi bi-geo-alt-fill text-2xl"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Best Locations</h3>
            <p class="mt-2 text-sm text-gray-300">
              Close to Angkor Wat and popular downtown attractions.
            </p>
          </div>

          <div class="rounded-xl bg-gray-700 p-6 text-center ring-1 ">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
              <i class="bi bi-tags-fill text-2xl"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Best Prices</h3>
            <p class="mt-2 text-sm text-gray-300">
              Competitive rates direct from local properties with no hidden fees.
            </p>
          </div>

          <div class="rounded-xl bg-gray-700 p-6 text-center ring-1 ">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
              <i class="bi bi-shield-check text-2xl"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Secure Booking</h3>
            <p class="mt-2 text-sm text-gray-300">
              Encrypted transaction processing and guaranteed reservations.
            </p>
          </div>

          <div class="rounded-xl bg-gray-700 p-6 text-center ring-1 ">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
              <i class="bi bi-headset text-2xl"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">24/7 Support</h3>
            <p class="mt-2 text-sm text-gray-300">
              Our support team is always available to assist your journey.
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
import HotelCard from "../components/HotelCard.vue"
import { hotels } from "../Data/Hotel"

const router = useRouter()

const checkIn = ref("")
const checkOut = ref("")
const guests = ref("1")
const error = ref("")

const featuredHotels = computed(() => hotels)

const searchHotels = () => {
  if (!checkIn.value || !checkOut.value) {
    error.value = "Please select both check-in and check-out dates."
    return
  }
  if (checkOut.value <= checkIn.value) {
    error.value = "Check-out date must be after the check-in date."
    return
  }
  error.value = ""
  router.push({
    path: "/hotel",
    query: { checkin: checkIn.value, checkout: checkOut.value, guests: guests.value }
  })
}
</script>