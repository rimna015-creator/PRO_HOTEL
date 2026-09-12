<script setup lang="ts">
import { t } from "../i18n"
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-blue-900 text-white">
    <!-- Main Footer -->
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <!-- About Us -->
        <div>
          <div class="mb-4">
            <span class="text-xl font-bold text-yellow-400 font-sans">Angkor</span>
            <span class="text-sm text-gray-300 font-serif">Booking.</span>
          </div>
          <p class="text-sm leading-relaxed text-gray-300">
            {{ t("Angkor Booking is a hotel reservation platform built by a passionate front-end student as a portfolio project.") }}
            {{ t("We aim to provide a seamless and enjoyable booking experience for travelers.") }}
            <span class="font-bold font-serif"> Miss.Narim & Miss.Leangchou</span>
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-yellow-400">{{ t("Quick Links") }}</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>
              <RouterLink to="/" class="transition hover:text-white">{{ t("Home") }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/hotel" class="transition hover:text-white">{{ t("Hotels") }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/explore" class="transition hover:text-white">{{ t("Explore") }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/promotion" class="transition hover:text-white">{{ t("Promotion") }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/my-booking" class="transition hover:text-white">{{ t("My Booking") }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/my-account" class="transition hover:text-white">{{ t("My Account") }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-yellow-400">{{ t("Contact Us") }}</h3>
          <ul class="space-y-3 text-sm text-gray-300">
            <li class="flex items-center gap-2">
              <i class="bi bi-geo-alt-fill text-yellow-400"></i>
              {{ t("Phnom Penh, Cambodia") }}
            </li>
            <li class="flex items-center gap-2">
              <i class="bi bi-telephone-fill text-yellow-400"></i>
              +855 12 345 678
            </li>
            <li class="flex items-center gap-2">
              <i class="bi bi-envelope-fill text-yellow-400"></i>
              info@angkorbooking.com
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-yellow-400">{{ t("Follow Us") }}</h3>
          <div class="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-gray-300 transition hover:bg-yellow-400 hover:text-blue-900"
            >
              <i class="bi bi-facebook text-lg"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-gray-300 transition hover:bg-yellow-400 hover:text-blue-900"
            >
              <i class="bi bi-instagram text-lg"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-gray-300 transition hover:bg-yellow-400 hover:text-blue-900"
            >
              <i class="bi bi-twitter-x text-lg"></i>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-gray-300 transition hover:bg-yellow-400 hover:text-blue-900"
            >
              <i class="bi bi-youtube text-lg"></i>
            </a>
          </div>
          <p class="mt-4 text-sm text-gray-400">{{ t("Stay connected for updates and travel tips!") }}</p>
        </div>

      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-blue-700">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
        <p class="text-sm text-gray-400">
          &copy; {{ currentYear }} Angkor Booking. {{ t("All rights reserved.") }}
        </p>
        <p class="text-sm text-gray-400">
          {{ t("Made with") }} <i class="bi bi-heart-fill text-gray-400"></i> {{ t("by a Front-End Student") }}
        </p>
      </div>
    </div>
  </footer>
</template>
