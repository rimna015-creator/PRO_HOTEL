<template>
  <div class="min-h-screen bg-blue-50 px-6 pb-16 pt-24">

    <!-- Hero -->
    <section class="mx-5 text-center">
      <h1 class="text-4xl font-bold text-blue-900">{{ t("Contact Us") }}</h1>
      <p class="mt-3 text-blue-500">{{ t("We'd love to hear from you") }}</p>
    </section>

    <div class="mx-5 mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">

      <!-- Contact Info -->
      <div class="space-y-6">
        <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-200">
          <h2 class="text-xl font-semibold text-blue-900">{{ t("Get in Touch") }}</h2>
          <ul class="mt-4 space-y-4 text-sm text-blue-600">
            <li class="flex items-start gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <p class="font-semibold text-blue-900">{{ t("Address") }}</p>
                <p>{{ t("Phnom Penh, Cambodia") }}</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <i class="bi bi-telephone-fill"></i>
              </div>
              <div>
                <p class="font-semibold text-blue-900">{{ t("Phone") }}</p>
                <p><a href="tel:+85512345678" class="hover:text-blue-900">+855 12 345 678</a></p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div>
                <p class="font-semibold text-blue-900">{{ t("Email") }}</p>
                <p><a href="mailto:info@angkorbooking.com" class="hover:text-blue-900">info@angkorbooking.com</a></p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <i class="bi bi-clock-fill"></i>
              </div>
              <div>
                <p class="font-semibold text-blue-900">{{ t("Working Hours") }}</p>
                <p>{{ t("Monday – Sunday: 8:00 AM – 10:00 PM") }}</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-200">
          <h2 class="text-xl font-semibold text-blue-900">{{ t("Follow Us") }}</h2>
          <div class="mt-4 flex items-center gap-4">
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
        </div>
      </div>

      <!-- Contact Form -->
      <div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-blue-200">
        <h2 class="text-xl font-semibold text-blue-900">{{ t("Send Us a Message") }}</h2>
        <p class="mt-2 text-sm text-blue-600">
          {{ t("Fill in the form and we'll get back to you as soon as possible.") }}
        </p>

        <form @submit.prevent="handleSubmit" class="mt-6 space-y-5">
          <div>
            <label for="contactName" class="block text-sm font-semibold text-blue-700">{{ t("Your Name") }}</label>
            <input
              id="contactName"
              v-model="form.name"
              type="text"
              required
              :placeholder="t('Enter your full name')"
              class="mt-2 block w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-blue-900 placeholder:text-blue-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label for="contactEmail" class="block text-sm font-semibold text-blue-700">{{ t("Email Address") }}</label>
            <input
              id="contactEmail"
              v-model="form.email"
              type="email"
              required
              :placeholder="t('you@example.com')"
              class="mt-2 block w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-blue-900 placeholder:text-blue-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label for="contactMessage" class="block text-sm font-semibold text-blue-700">{{ t("Message") }}</label>
            <textarea
              id="contactMessage"
              v-model="form.message"
              required
              rows="5"
              :placeholder="t('How can we help you?')"
              class="mt-2 block w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-blue-900 placeholder:text-blue-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md shadow-blue-900/10 transition hover:bg-blue-700 active:scale-[0.98]"
          >
            {{ t("Send Message") }}
          </button>
        </form>

        <p v-if="sent" class="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          <i class="bi bi-check-circle-fill mr-1"></i>
          {{ t("Thank you! Your message has been sent successfully.") }}
        </p>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { t } from "../i18n"

const form = reactive({ name: "", email: "", message: "" })
const sent = ref(false)

const handleSubmit = () => {
  sent.value = true
  form.name = ""
  form.email = ""
  form.message = ""
  setTimeout(() => {
    sent.value = false
  }, 5000)
}
</script>