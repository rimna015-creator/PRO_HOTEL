<template>
  <div class="min-h-screen bg-gray-50 px-6 pb-16 pt-24">
    <h1 class="text-center text-3xl font-bold text-gray-800">
      My Account
    </h1>

    <!-- Logged In -->
    <div v-if="currentUser" class="mx-auto mt-8 max-w-4xl">

      <!-- Account Information -->
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-center gap-4">

            <!-- Avatar -->
            <div
              class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white"
            >
              {{ initials }}
            </div>

            <!-- User Info -->
            <div class="min-w-0">
              <h2 class="text-xl font-bold text-gray-800">
                {{ currentUser.name }}
              </h2>

              <p class="mt-1 text-sm text-gray-500">
                <i class="bi bi-envelope mr-1 text-blue-600"></i>
                {{ currentUser.email }}
              </p>

              <p v-if="currentUser.phone" class="mt-1 text-sm text-gray-500">
                <i class="bi bi-telephone mr-1 text-blue-600"></i>
                {{ currentUser.phone }}
              </p>

              <p class="mt-1 text-sm text-gray-500">
                <i class="bi bi-calendar3 mr-1 text-blue-600"></i>
                Member since {{ formatDate(currentUser.joinedAt) }}
              </p>
            </div>
          </div>

          <!-- Edit Button -->
          <button
            v-if="!editing"
            @click="startEdit"
            class="flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            <i class="bi bi-pencil-square"></i>
            Edit
          </button>
        </div>

        <!-- Success Message -->
        <p
          v-if="successMsg && !editing"
          class="mt-4 rounded-lg bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-700"
        >
          <i class="bi bi-check-circle-fill mr-1"></i>
          {{ successMsg }}
        </p>

        <!-- Edit Form -->
        <div v-if="editing" class="mt-6 rounded-xl bg-gray-50 p-5">
          <h3 class="text-base font-semibold text-gray-800">
            Edit Your Information
          </h3>

          <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label for="editName" class="block text-sm font-semibold text-gray-700">Full Name</label>
              <input
                id="editName"
                v-model="editName"
                type="text"
                placeholder="Enter your full name"
                class="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label for="editEmail" class="block text-sm font-semibold text-gray-700">Email Address</label>
              <input
                id="editEmail"
                v-model="editEmail"
                type="email"
                placeholder="you@email.com"
                class="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label for="editPhone" class="block text-sm font-semibold text-gray-700">
                Phone Number <span class="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                id="editPhone"
                v-model="editPhone"
                type="tel"
                placeholder="+855 12 345 678"
                class="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <p v-if="errorMsg" class="mt-3 text-sm text-red-500">
            <i class="bi bi-exclamation-circle mr-1"></i>
            {{ errorMsg }}
          </p>

          <div class="mt-4 flex gap-3">
            <button
              @click="saveChanges"
              class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <i class="bi bi-check-lg mr-1"></i>
              Save Changes
            </button>
            <button
              @click="cancelEdit"
              class="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>

        <!-- Simple Stats -->
        <div class="mt-6 grid grid-cols-3 border-t border-gray-100 pt-5">
          <div class="text-center">
            <p class="text-xl font-bold text-blue-600">
              {{ userBookings.length }}
            </p>
            <p class="text-xs text-gray-500">
              Bookings
            </p>
          </div>

          <div class="border-x border-gray-100 text-center">
            <p class="text-xl font-bold text-blue-600">
              ${{ totalSpent }}
            </p>
            <p class="text-xs text-gray-500">
              Total Spent
            </p>
          </div>

          <div class="text-center">
            <p class="text-xl font-bold text-red-500">
              {{ favoriteHotels.length }}
            </p>
            <p class="text-xs text-gray-500">
              Favorites
            </p>
          </div>
        </div>

        <!-- Buttons -->
        <div class="mt-6 flex gap-3">
          <RouterLink
            to="/my-booking"
            class="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            View My Bookings
          </RouterLink>

          <button
            @click="handleSignOut"
            class="rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-200"
          >
            Sign Out
          </button>
        </div>
      </div>

      <!-- Favorite Hotels -->
      <div class="mt-6 rounded-xl bg-white p-6 shadow-sm">

        <!-- Title -->
        <div class="flex items-center">
          <i class="bi bi-heart-fill mr-2 text-red-500"></i>

          <h2 class="text-lg font-bold text-gray-800">
            My Favorite Hotels
          </h2>

          <span class="ml-auto text-sm text-gray-400">
            {{ favoriteHotels.length }} saved
          </span>
        </div>

        <!-- Favorite Hotels -->
        <div
          v-if="favoriteHotels.length"
          class="mt-6 flex flex-wrap justify-center gap-5"
        >
          <HotelCard
            v-for="hotel in favoriteHotels"
            :key="hotel.id"
            :hotel="hotel"
          />
        </div>

        <!-- No Favorites -->
        <div
          v-else
          class="mt-5 border-t border-gray-100 pt-8 text-center"
        >
          <i class="bi bi-heart text-3xl text-gray-300"></i>

          <p class="mt-3 text-sm text-gray-500">
            You haven't saved any favorite hotels yet.
          </p>

          <RouterLink
            to="/hotel"
            class="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Browse Hotels
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Not Logged In -->
    <div v-else class="mx-auto mt-8 max-w-md">
      <div class="rounded-xl bg-white p-8 text-center shadow-sm">

        <div
          class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50"
        >
          <i class="bi bi-person text-3xl text-blue-600"></i>
        </div>

        <h2 class="mt-4 text-xl font-bold text-gray-800">
          You are not signed in
        </h2>

        <p class="mt-2 text-sm text-gray-500">
          Sign in to view your account and booking history.
        </p>

        <button
          @click="openLogin"
          class="mt-5 w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Sign In
        </button>

        <button
          @click="openCreateAccount"
          class="mt-2 w-full rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
        >
          Create an Account
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
import { currentUser, signOut, updateUser } from "../store/user"
import { bookings, updateBookingEmail } from "../store/booking"
import { favoriteHotels } from "../store/favorite"
import { openLogin, openCreateAccount } from "../store/ui"
import HotelCard from "../components/HotelCard.vue"

const router = useRouter()

const editing = ref(false)
const editName = ref("")
const editEmail = ref("")
const editPhone = ref("")
const errorMsg = ref("")
const successMsg = ref("")

const startEdit = () => {
  editName.value = currentUser.value?.name || ""
  editEmail.value = currentUser.value?.email || ""
  editPhone.value = currentUser.value?.phone || ""
  editing.value = true
  errorMsg.value = ""
  successMsg.value = ""
}

const saveChanges = () => {
  const name = editName.value.trim()
  if (!name) {
    errorMsg.value = "Your name cannot be empty"
    return
  }

  const email = editEmail.value.trim()
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errorMsg.value = "Please enter a valid email address"
    return
  }

  const oldEmail = currentUser.value?.email || ""
  updateUser({
    name,
    email,
    phone: editPhone.value.trim()
  })

  if (email !== oldEmail) {
    updateBookingEmail(oldEmail, email)
  }

  editing.value = false
  errorMsg.value = ""
  successMsg.value = "Your profile has been updated successfully!"

  setTimeout(() => {
    successMsg.value = ""
  }, 3500)
}

const cancelEdit = () => {
  editing.value = false
  errorMsg.value = ""
}

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
    ? bookings.value.filter(
        (b) => b.email === currentUser.value?.email
      )
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
