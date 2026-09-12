<template>
  <div class="min-h-screen bg-gray-100 px-6 pb-16 pt-24">

    <!-- Hotel Not Found -->
    <div v-if="!hotelDetail" class="flex flex-col items-center justify-center py-20 text-center">
      <i class="bi bi-exclamation-triangle text-5xl text-gray-400"></i>
      <h2 class="mt-4 text-xl font-semibold text-gray-800">{{ t("Hotel Not Found") }}</h2>
      <p class="mt-2 text-sm text-gray-500">{{ t("The hotel you are trying to book does not exist.") }}</p>
      <RouterLink to="/hotel" class="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white hover:bg-blue-700">
        {{ t("Back to Hotels") }}
      </RouterLink>
    </div>

    <!-- Success Screen -->
    <div v-else-if="bookingConfirmed && lastBooking" class="mx-auto max-w-2xl">
      <div class="rounded-2xl bg-white p-8 text-center shadow-md">
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <i class="bi bi-check-lg text-5xl text-green-600"></i>
        </div>
        <h1 class="mt-5 text-3xl font-bold text-gray-800">{{ t("Thank You!") }}</h1>
        <p class="mt-3 text-lg text-gray-700">
          {{ t("Your booking has been confirmed successfully.") }}
        </p>

        <div class="mx-auto mt-6 max-w-md rounded-xl bg-blue-50 p-5 text-left">
          <div class="flex items-center justify-between border-b border-blue-100 pb-3">
            <span class="text-sm text-gray-500">{{ t("Booking ID") }}</span>
            <span class="font-mono text-sm font-bold text-blue-700">{{ lastBooking.id }}</span>
          </div>
          <div class="flex items-center justify-between border-b border-blue-100 py-3">
            <span class="text-sm text-gray-500">{{ t("Hotel") }}</span>
            <span class="text-sm font-semibold text-gray-800">{{ lastBooking.hotelName }}</span>
          </div>
          <div class="flex items-center justify-between border-b border-blue-100 py-3">
            <span class="text-sm text-gray-500">{{ t("Room") }}</span>
            <span class="text-sm font-semibold text-gray-800">{{ lastBooking.roomType }}</span>
          </div>
          <div class="flex items-center justify-between border-b border-blue-100 py-3">
            <span class="text-sm text-gray-500">{{ t("Dates") }}</span>
            <span class="text-sm font-semibold text-gray-800">
              {{ formatDate(lastBooking.checkIn) }} - {{ formatDate(lastBooking.checkOut) }}
            </span>
          </div>
          <div class="flex items-center justify-between pt-3">
            <span class="text-sm text-gray-500">{{ t("Total") }}</span>
            <span class="text-lg font-bold text-gray-900">${{ lastBooking.price }}</span>
          </div>
          <div class="mt-2 flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2">
            <span class="text-sm font-medium text-emerald-700">{{ t("Paid Now") }}</span>
            <span class="font-bold text-emerald-700">${{ lastBooking.amountPaid ?? lastBooking.price }}</span>
          </div>
          <div class="mt-2 flex items-center justify-between">
            <span class="text-sm text-gray-500">{{ t("Payment Method") }}</span>
            <span class="text-sm font-semibold text-gray-800">{{ lastBooking.paymentMethod }}</span>
          </div>
          <div v-if="(lastBooking.balanceDue ?? 0) > 0" class="flex items-center justify-between">
            <span class="text-sm text-gray-500">{{ t("Balance at Check-in") }}</span>
            <span class="text-sm font-semibold text-amber-600">${{ lastBooking.balanceDue }}</span>
          </div>
        </div>

        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <RouterLink
            to="/my-booking"
            class="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            {{ t("View My Bookings") }}
          </RouterLink>
          <RouterLink
            :to="'/hotel/' + lastBooking.hotelId"
            class="rounded-lg bg-gray-200 px-6 py-2.5 font-medium text-gray-700 transition hover:bg-gray-300"
          >
            {{ t("Back to Hotel") }}
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Booking Form -->
    <div v-else class="mx-auto max-w-3xl">

      <!-- Back Button -->
      <button
        @click="$router.back()"
        class="mb-4 flex items-center gap-2 rounded-lg bg-blue-300 px-4 py-1.5 font-medium text-white transition hover:bg-blue-400"
      >
        <i class="bi bi-arrow-left"></i>
        {{ t("Back") }}
      </button>

      <!-- Hotel Summary -->
      <div class="overflow-hidden rounded-2xl bg-white shadow-md">
        <div class="flex flex-col items-center gap-5 p-6 sm:flex-row">
          <img
            :src="hotelDetail.image"
            :alt="hotelDetail.name"
            class="h-28 w-full rounded-xl object-cover sm:w-40"
          />
          <div>
            <h1 class="text-2xl font-bold text-gray-800">{{ hotelDetail.name }}</h1>
            <p class="flex items-center gap-1 text-sm text-gray-500">
              <i class="bi bi-geo-alt-fill text-blue-600"></i>
              {{ hotelDetail.location }}
            </p>
            <p class="mt-1 flex items-center gap-1 text-sm text-yellow-500">
              <i class="bi bi-star-fill"></i>
              <span class="font-semibold">{{ hotelDetail.rating }}</span>
              <span class="text-gray-500">({{ hotelDetail.reviewer }} {{ t("reviews") }})</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Form Card -->
      <div class="mt-6 rounded-2xl bg-white p-6 shadow-md sm:p-8">
        <h2 class="mb-5 text-xl font-semibold text-gray-800">{{ t("Guest Information") }}</h2>

        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">

          <!-- Full Name -->
          <div class="sm:col-span-2">
            <label for="fullName" class="block text-sm font-semibold text-gray-700">{{ t("Full Name") }}</label>
            <input
              id="fullName"
              v-model="fullName"
              type="text"
              :placeholder="t('Enter your full name')"
              class="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-semibold text-gray-700">{{ t("Email Address") }}</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="you@email.com"
              class="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <!-- Phone -->
          <div>
            <label for="phone" class="block text-sm font-semibold text-gray-700">{{ t("Phone Number") }}</label>
            <input
              id="phone"
              v-model="phone"
              type="tel"
              placeholder="+855 12 345 678"
              class="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <!-- Check-in -->
          <div>
            <label for="checkIn" class="block text-sm font-semibold text-gray-700">{{ t("Check-in Date") }}</label>
            <input
              id="checkIn"
              v-model="checkIn"
              :min="today"
              type="date"
              class="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <!-- Check-out -->
          <div>
            <label for="checkOut" class="block text-sm font-semibold text-gray-700">{{ t("Check-out Date") }}</label>
            <input
              id="checkOut"
              v-model="checkOut"
              :min="minCheckOut"
              type="date"
              class="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <!-- Room Type -->
          <div>
            <label for="roomType" class="block text-sm font-semibold text-gray-700">{{ t("Room Type") }}</label>
            <select
              id="roomType"
              v-model="roomType"
              class="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            >
              <option
                v-for="room in hotelDetail.roomTypes"
                :key="room.name"
                :value="room.name"
              >
                {{ room.name }} - ${{ room.price }}{{ t("/ night") }}
              </option>
            </select>
          </div>

          <!-- Guests -->
          <div>
            <label for="guests" class="block text-sm font-semibold text-gray-700">{{ t("Guests") }}</label>
            <input
              id="guests"
              v-model.number="guests"
              type="number"
              min="1"
              :max="selectedRoom?.capacity ?? 1"
              class="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
            <p v-if="selectedRoom" class="mt-1 text-xs text-gray-500">
              {{ t("Max") }} {{ selectedRoom.capacity }} {{ t("guests for this room") }}
            </p>
          </div>

        </div>

        <!-- Summary -->
        <div class="mt-6 rounded-xl bg-blue-50 p-5">
          <div class="flex items-center justify-between text-sm text-gray-600">
            <span>{{ roomType }}</span>
            <span>${{ selectedRoom?.price ?? 0 }} {{ t("/ night") }}</span>
          </div>
          <div class="flex items-center justify-between text-sm text-gray-600">
            <span>{{ nights }} {{ t("night(s)") }}</span>
            <span>{{ formatDate(checkIn) }}</span>
            <span>{{ t("to") }}</span>
            <span>{{ formatDate(checkOut) }}</span>
          </div>
          <hr class="my-3 border-blue-100" />
          <div class="flex items-center justify-between">
            <span class="font-semibold text-gray-800">{{ t("Total Price") }}</span>
            <span class="text-2xl font-bold text-gray-900">${{ totalPrice }}</span>
          </div>
        </div>

        </div>

      <!-- Payment Section -->
      <PaymentSection
        :amount="totalPrice"
        :before-pay="validateGuestInfo"
        @payment-success="onPaymentSuccess"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useRoute } from "vue-router"
import { hotelDetails } from "../Data/hotelDetail"
import { addBooking, type BookingRecord, type PaymentInfo } from "../store/booking"
import { currentUser } from "../store/user"
import PaymentSection from "../components/PaymentSection.vue"
import { t } from "../i18n"

const route = useRoute()

const hotelDetail = computed(() =>
  hotelDetails.find((h) => h.id === Number(route.params.id))
)

const bookingConfirmed = ref(false)
const lastBooking = ref<BookingRecord | null>(null)

const fullName = ref(currentUser.value?.name || "")
const email = ref(currentUser.value?.email || "")
const phone = ref("")
const checkIn = ref("")
const checkOut = ref("")
const roomType = ref((route.query.room as string) || hotelDetail.value?.roomTypes[0]?.name || "")
const guests = ref(1)

const today = new Date().toISOString().split("T")[0]

const minCheckOut = computed(() => {
  if (!checkIn.value) return today
  const d = new Date(checkIn.value)
  d.setDate(d.getDate() + 1)
  return d.toISOString().split("T")[0]
})

const selectedRoom = computed(() =>
  hotelDetail.value?.roomTypes.find((r) => r.name === roomType.value)
)

const nights = computed(() => {
  if (!checkIn.value || !checkOut.value) return 0
  const diff =
    (new Date(checkOut.value).getTime() - new Date(checkIn.value).getTime()) /
    86400000
  return diff > 0 ? diff : 0
})

const totalPrice = computed(() => (selectedRoom.value?.price ?? 0) * nights.value)

const formatDate = (date: string) => {
  if (!date) return "-"
  const d = new Date(date + "T00:00:00")
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })
}

const validateGuestInfo = (): boolean => {
  if (!fullName.value || !email.value || !phone.value) {
    alert(t("Please fill in your name, email and phone number"))
    return false
  }
  if (!checkIn.value || !checkOut.value) {
    alert(t("Please select check-in and check-out dates"))
    return false
  }
  if (nights.value <= 0) {
    alert(t("Check-out date must be after the check-in date"))
    return false
  }
  if (!selectedRoom.value || totalPrice.value <= 0) {
    alert(t("Please select a valid room type"))
    return false
  }
  return true
}

const onPaymentSuccess = (payment: PaymentInfo) => {
  const booking: BookingRecord = {
    id: "BK-" + Date.now().toString(36).toUpperCase(),
    hotelId: hotelDetail.value!.id,
    hotelName: hotelDetail.value!.name,
    hotelImage: hotelDetail.value!.image,
    roomType: roomType.value,
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    guests: guests.value,
    price: totalPrice.value,
    status: "Confirmed",
    bookedAt: new Date().toISOString(),
    paymentMethod: payment.method,
    paymentPlan: payment.plan,
    amountPaid: payment.amountPaid,
    balanceDue: payment.balanceDue,
    cardLast4: payment.cardLast4
  }

  addBooking(booking)
  lastBooking.value = booking
  bookingConfirmed.value = true
  window.scrollTo(0, 0)
}
</script>