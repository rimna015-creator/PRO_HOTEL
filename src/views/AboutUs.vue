<template>
  <div class="min-h-screen bg-blue-50 px-6 pb-16 pt-24">

    <!-- Hero -->
    <section class="mx-5 text-center">
      <h1 class="text-4xl font-bold text-blue-900">{{ t("About Us") }}</h1>
      <p class="mt-3 text-blue-500">{{ t("Who we are and why we built Angkor Booking") }}</p>
    </section>

    <!-- Story -->
    <section class="mx-5 mt-12">
      <div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-blue-200 sm:p-10">
        <h2 class="text-2xl font-bold text-blue-900">{{ t("Our Story") }}</h2>
        <p class="mt-4 leading-relaxed text-blue-600">
          {{ t("Angkor Booking was born out of a passion for Cambodia's rich heritage and the desire to make booking a stay near the legendary Angkor temples as seamless as possible.") }}
        </p>
        <p class="mt-3 leading-relaxed text-blue-600">
          {{ t("Built by two front-end students, this platform is a portfolio project that brings together a carefully curated collection of hotels, festival promotions, and travel inspiration — all in one place.") }}
        </p>
        <p class="mt-3 leading-relaxed text-blue-600">
          {{ t("We believe travel should be effortless, transparent, and memorable. That's why every property is hand-picked, every price is clear, and support is always a message away.") }}
        </p>
      </div>
    </section>

    <!-- Features -->
    <section class="mx-5 mt-12">
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-bold text-blue-900">{{ t("What You Can Do") }}</h2>
        <p class="mt-2 text-blue-600">{{ t("Everything you need to plan your trip to Siem Reap") }}</p>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <i class="bi bi-search text-xl"></i>
          </div>
          <h3 class="mt-3 text-base font-semibold text-blue-900">{{ t("Search Hotels") }}</h3>
          <p class="mt-2 text-sm text-blue-600">{{ t("Search by name or location and filter by star rating and hotel type.") }}</p>
        </div>
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <i class="bi bi-calendar-check text-xl"></i>
          </div>
          <h3 class="mt-3 text-base font-semibold text-blue-900">{{ t("Book in Minutes") }}</h3>
          <p class="mt-2 text-sm text-blue-600">{{ t("Choose your room, dates and a flexible payment plan.") }}</p>
        </div>
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <i class="bi bi-stars text-xl"></i>
          </div>
          <h3 class="mt-3 text-base font-semibold text-blue-900">{{ t("Festival Promotions") }}</h3>
          <p class="mt-2 text-sm text-blue-600">{{ t("Discover seasonal packages with exclusive discounts.") }}</p>
        </div>
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <i class="bi bi-geo-alt-fill text-xl"></i>
          </div>
          <h3 class="mt-3 text-base font-semibold text-blue-900">{{ t("Explore Siem Reap") }}</h3>
          <p class="mt-2 text-sm text-blue-600">{{ t("Discover 20+ temples, museums and attractions nearby.") }}</p>
        </div>
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <i class="bi bi-heart-fill text-xl"></i>
          </div>
          <h3 class="mt-3 text-base font-semibold text-blue-900">{{ t("Save Favorites") }}</h3>
          <p class="mt-2 text-sm text-blue-600">{{ t("Save hotels you love and come back to them anytime.") }}</p>
        </div>
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <i class="bi bi-receipt text-xl"></i>
          </div>
          <h3 class="mt-3 text-base font-semibold text-blue-900">{{ t("Track Bookings") }}</h3>
          <p class="mt-2 text-sm text-blue-600">{{ t("View your booking history, payments and balances.") }}</p>
        </div>
      </div>
    </section>

    <!-- Design & Colors -->
    <section class="mx-5 mt-12">
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-bold text-blue-900">{{ t("Design & Colors") }}</h2>
        <p class="mx-auto mt-2 max-w-2xl text-blue-600">
          {{ t("We carefully chose a clean, calming blue palette inspired by the temples at dawn and the Tonle Sap sky.") }}
        </p>
      </div>

      <div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-blue-200 sm:p-10">
        <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          <div class="text-center">
            <div class="mx-auto h-16 w-16 rounded-2xl shadow-inner ring-1 ring-black/5" style="background-color: #1e3a8a;"></div>
            <p class="mt-2 text-sm font-semibold text-blue-900">Blue 800</p>
            <p class="text-xs text-blue-500">{{ t("Navbar & selected filters") }}</p>
            <p class="font-mono text-xs text-blue-400">#1e3a8a</p>
          </div>
          <div class="text-center">
            <div class="mx-auto h-16 w-16 rounded-2xl shadow-inner ring-1 ring-black/5" style="background-color: #2563eb;"></div>
            <p class="mt-2 text-sm font-semibold text-blue-900">Blue 600</p>
            <p class="text-xs text-blue-500">{{ t("Buttons & accents") }}</p>
            <p class="font-mono text-xs text-blue-400">#2563eb</p>
          </div>
          <div class="text-center">
            <div class="mx-auto h-16 w-16 rounded-2xl shadow-inner ring-1 ring-black/5" style="background-color: #eff6ff;"></div>
            <p class="mt-2 text-sm font-semibold text-blue-900">Blue 50</p>
            <p class="text-xs text-blue-500">{{ t("Page background") }}</p>
            <p class="font-mono text-xs text-blue-400">#eff6ff</p>
          </div>
          <div class="text-center">
            <div class="mx-auto h-16 w-16 rounded-2xl shadow-inner ring-1 ring-black/10" style="background-color: #ffffff;"></div>
            <p class="mt-2 text-sm font-semibold text-blue-900">White</p>
            <p class="text-xs text-blue-500">{{ t("Cards & surfaces") }}</p>
            <p class="font-mono text-xs text-blue-400">#ffffff</p>
          </div>
          <div class="text-center">
            <div class="mx-auto h-16 w-16 rounded-2xl shadow-inner ring-1 ring-black/5" style="background-color: #bfdbfe;"></div>
            <p class="mt-2 text-sm font-semibold text-blue-900">Blue 200</p>
            <p class="text-xs text-blue-500">{{ t("Borders & dividers") }}</p>
            <p class="font-mono text-xs text-blue-400">#bfdbfe</p>
          </div>
          <div class="text-center">
            <div class="mx-auto h-16 w-16 rounded-2xl shadow-inner ring-1 ring-black/5" style="background-color: #0f172a;"></div>
            <p class="mt-2 text-sm font-semibold text-white bg-blue-900 inline-block rounded px-2 py-0.5">Blue 900</p>
            <p class="mt-1 text-xs text-blue-500">{{ t("Text & headings") }}</p>
            <p class="font-mono text-xs text-blue-400">#0f172a</p>
          </div>
          <div class="text-center">
            <div class="mx-auto h-16 w-16 rounded-2xl shadow-inner ring-1 ring-black/5" style="background-color: #f59e0b;"></div>
            <p class="mt-2 text-sm font-semibold text-blue-900">Amber 500</p>
            <p class="text-xs text-blue-500">{{ t("Stars & ratings") }}</p>
            <p class="font-mono text-xs text-blue-400">#f59e0b</p>
          </div>
          <div class="text-center">
            <div class="mx-auto h-16 w-16 rounded-2xl shadow-inner ring-1 ring-black/5" style="background-color: #047857;"></div>
            <p class="mt-2 text-sm font-semibold text-blue-900">Emerald 600</p>
            <p class="text-xs text-blue-500">{{ t("Book Now & availability") }}</p>
            <p class="font-mono text-xs text-blue-400">#047857</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Built With -->
    <section class="mx-5 mt-12">
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-bold text-blue-900">{{ t("Built With") }}</h2>
        <p class="mt-2 text-blue-600">{{ t("The technology that powers the platform") }}</p>
      </div>
      <div class="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
        <span v-for="tech in techStack" :key="tech.name" class="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-800 shadow-sm ring-1 ring-blue-200">
          <i :class="tech.icon" class="text-blue-600"></i>
          {{ tech.name }}
        </span>
      </div>
    </section>

    <!-- Stats -->
    <section class="mx-5 mt-12">
      <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <p class="text-3xl font-bold text-blue-900">26+</p>
          <p class="mt-1 text-sm text-blue-500">{{ t("Hotels") }}</p>
        </div>
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <p class="text-3xl font-bold text-blue-900">20+</p>
          <p class="mt-1 text-sm text-blue-500">{{ t("Places to Explore") }}</p>
        </div>
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <p class="text-3xl font-bold text-blue-900">4</p>
          <p class="mt-1 text-sm text-blue-500">{{ t("Festival Packages") }}</p>
        </div>
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <p class="text-3xl font-bold text-blue-900">24/7</p>
          <p class="mt-1 text-sm text-blue-500">{{ t("Support") }}</p>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="mx-5 mt-12">
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-bold text-blue-900">{{ t("Meet the Team") }}</h2>
        <p class="mt-2 text-blue-600">{{ t("The students behind this project") }}</p>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div class="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-blue-200">
          <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
            N
          </div>
          <h3 class="mt-4 text-lg font-semibold text-blue-900">Miss Narim</h3>
          <p class="mt-1 text-sm text-blue-500">{{ t("Front-End Developer") }}</p>
        </div>
        <div class="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-blue-200">
          <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
            L
          </div>
          <h3 class="mt-4 text-lg font-semibold text-blue-900">Miss Leangchou</h3>
          <p class="mt-1 text-sm text-blue-500">{{ t("Front-End Developer") }}</p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="mx-5 mt-12">
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-bold text-blue-900">{{ t("What We Value") }}</h2>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <i class="bi bi-shield-check text-xl"></i>
          </div>
          <h3 class="mt-3 text-base font-semibold text-blue-900">{{ t("Trust") }}</h3>
          <p class="mt-2 text-sm text-blue-600">{{ t("Honest listings, clear prices and secure checkouts.") }}</p>
        </div>
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <i class="bi bi-geo-alt-fill text-xl"></i>
          </div>
          <h3 class="mt-3 text-base font-semibold text-blue-900">{{ t("Local Love") }}</h3>
          <p class="mt-2 text-sm text-blue-600">{{ t("Supporting local properties across Cambodia.") }}</p>
        </div>
        <div class="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-200">
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <i class="bi bi-headset text-xl"></i>
          </div>
          <h3 class="mt-3 text-base font-semibold text-blue-900">{{ t("Care") }}</h3>
          <p class="mt-2 text-sm text-blue-600">{{ t("Real people ready to help you any time.") }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { t } from "../i18n"

const techStack = [
  { name: "Vue 3", icon: "bi bi-filetype-vue" },
  { name: "Vite", icon: "bi bi-lightning-charge-fill" },
  { name: "TypeScript", icon: "bi bi-filetype-tsx" },
  { name: "Tailwind CSS", icon: "bi bi-palette-fill" },
  { name: "Vue Router", icon: "bi bi-signpost-split-fill" },
  { name: "Bootstrap Icons", icon: "bi bi-bootstrap-fill" }
]
</script>