<script setup lang="ts">
import { t } from "../i18n"
import Logo from "./Logo.vue"
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-blue-300 text-black">
    <!-- Main Footer -->
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <!-- About Us -->
        <div>
          <div class="mb-4">
            <Logo />
          </div>
          <p class="text-sm leading-relaxed text-blue-600">
            {{ t("Angkor Booking is a hotel reservation platform built by a passionate front-end student as a portfolio project.") }}
            {{ t("We aim to provide a seamless and enjoyable booking experience for travelers.") }}
            <span class="font-bold font-serif text-blue-900"> Miss.Narim &amp; Miss.Leangchou</span>
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-blue-800">{{ t("Quick Links") }}</h3>
          <ul class="space-y-2 text-sm text-blue-600">
            <li>
              <RouterLink to="/" class="transition hover:text-blue-900">{{ t("Home") }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/hotel" class="transition hover:text-blue-900">{{ t("Hotels") }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/explore" class="transition hover:text-blue-900">{{ t("Explore") }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/promotion" class="transition hover:text-blue-900">{{ t("Promotion") }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/my-booking" class="transition hover:text-blue-900">{{ t("My Booking") }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/my-account" class="transition hover:text-blue-900">{{ t("My Account") }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-blue-800">{{ t("Contact Us") }}</h3>
          <ul class="space-y-3 text-sm text-blue-600">
            <li class="flex items-center gap-2">
              <i class="bi bi-geo-alt-fill text-blue-500"></i>
              {{ t("Phnom Penh, Cambodia") }}
            </li>
            <li class="flex items-center gap-2">
              <i class="bi bi-telephone-fill text-blue-500"></i>
              +855 12 345 678
            </li>
            <li class="flex items-center gap-2">
              <i class="bi bi-envelope-fill text-blue-500"></i>
              info@angkorbooking.com
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-blue-800">{{ t("Follow Us") }}</h3>
          <div class="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white transition hover:bg-blue-900"
            >
              <i class="bi bi-facebook text-lg"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white transition hover:bg-blue-900"
            >
              <i class="bi bi-instagram text-lg"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white transition hover:bg-blue-900"
            >
              <i class="bi bi-twitter-x text-lg"></i>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white transition hover:bg-blue-900"
            >
              <i class="bi bi-youtube text-lg"></i>
            </a>
          </div>
          <p class="mt-4 text-sm text-blue-600">{{ t("Stay connected for updates and travel tips!") }}</p>
        </div>

      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-blue-200">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
        <p class="text-sm text-blue-600">
          &copy; {{ currentYear }} Angkor Booking. {{ t("All rights reserved.") }}
        </p>
        <p class="text-sm text-blue-600">
          {{ t("Made with") }} <i class="bi bi-heart-fill text-blue-700"></i> {{ t("by a Front-End Student") }}
        </p>
      </div>
    </div>
  </footer>
</template>
