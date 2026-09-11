<template>
  <div class="min-h-screen bg-gray-100 px-6 pb-16 pt-24">

    <h1 class="text-center text-3xl font-bold text-gray-800">
      My Account
    </h1>

    <!-- Logged In -->
    <div v-if="currentUser" class="mx-auto mt-8 max-w-xl">
      <div class="rounded-2xl bg-white p-8 shadow-md">
        <div class="flex items-center gap-5">
          <div
            class="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white"
          >
            {{ initials }}
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800">
              {{ currentUser.name }}
            </h2>
            <p class="text-sm text-gray-500">
              <i class="bi bi-envelope-fill mr-1 text-blue-600"></i>
              {{ currentUser.email }}
            </p>
            <p class="mt-1 text-sm text-gray-500">
              <i class="bi bi-calendar3 mr-1 text-blue-600"></i>
              Member since {{ formatDate(currentUser.joinedAt) }}
            </p>
          </div>
        </div>

        <!-- Stats -->
        <div class="mt-6 grid grid-cols-2 gap-4">
          <div class="rounded-xl bg-blue-50 p-5 text-center">
            <p class="text-3xl font-bold text-blue-700">{{ userBookings.length }}</p>
            <p class="mt-1 text-sm text-gray-500">Total Bookings</p>
          </div>
          <div class="rounded-xl bg-blue-50 p-5 text-center">
            <p class="text-3xl font-bold text-blue-700">${{ totalSpent }}</p>
            <p class="mt-1 text-sm text-gray-500">Total Spent</p>
          </div>
        </div>

        <RouterLink
          to="/my-booking"
          class="mt-6 block w-full rounded-2xl bg-blue-600 px-6 py-3 text-center text-lg font-bold text-white transition hover:bg-blue-700"
        >
          View My Bookings
        </RouterLink>

        <button
          @click="handleSignOut"
          class="mt-3 w-full rounded-2xl bg-red-100 px-6 py-3 text-lg font-bold text-red-600 transition hover:bg-red-200"
        >
          Sign Out
        </button>
      </div>
    </div>

    <!-- Not Logged In -->
    <div v-else class="mx-auto mt-8 max-w-xl">
      <div class="rounded-2xl bg-white p-10 text-center shadow-md">
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <i class="bi bi-person-lock text-4xl text-blue-600"></i>
        </div>
        <h2 class="mt-5 text-xl font-bold text-gray-800">
          You are not signed in
        </h2>
        <p class="mt-2 text-sm text-gray-500">
          Sign in to view your account details and booking history.
        </p>
        <button
          @click="openLogin"
          class="mt-6 w-full rounded-2xl bg-blue-600 px-6 py-3 text-lg font-bold text-white transition hover:bg-blue-700"
        >
          Sign In
        </button>
        <button
          @click="openCreateAccount"
          class="mt-3 w-full rounded-2xl bg-gray-100 px-6 py-3 text-lg font-bold text-gray-700 transition hover:bg-gray-200"
        >
          Create an Account
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"
import { currentUser, signOut } from "../store/user"
import { bookings } from "../store/booking"
import { openLogin, openCreateAccount } from "../store/ui"

const router = useRouter()

const initials = computed(() =>
  (currentUser.value?.name || "?")
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
)

const userBookings = computed(() =>
  currentUser.value
    ? bookings.value.filter((b) => b.email === currentUser.value?.email)
    : []
)

const totalSpent = computed(() =>
  userBookings.value
    .filter((b) => b.status === "Confirmed")
    .reduce((sum, b) => sum + b.price, 0)
)

const formatDate = (iso: string) => {
  const d = new Date(iso)
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}

const handleSignOut = () => {
  signOut()
  router.push("/")
}
</script>