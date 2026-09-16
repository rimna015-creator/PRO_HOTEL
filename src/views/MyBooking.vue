<template>
  <div class="min-h-screen bg-blue-50 px-6 pb-16 pt-24">

    <h1 class="text-center text-3xl font-bold text-blue-900">
      {{ t("My Bookings") }}
    </h1>
    <p class="mt-2 text-center text-sm text-blue-600">
      {{ t("bookings in total") }} {{ bookings.length }}
    </p>

    <!-- Empty State -->
    <div
      v-if="!bookings.length"
      class="flex flex-col items-center justify-center py-20 text-center"
    >
      <i class="bi bi-calendar-x text-6xl text-blue-400"></i>
      <h2 class="mt-4 text-xl font-semibold text-blue-900">
        {{ t("No bookings yet") }}
      </h2>
      <p class="mt-2 text-sm text-blue-500">
        {{ t("When you book a hotel, your reservations will appear here.") }}
      </p>
      <RouterLink
        to="/hotel"
        class="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
      >
        {{ t("Browse Hotels") }}
      </RouterLink>
    </div>

    <!-- Booking List -->
    <div v-else class="mx-auto mt-8 max-w-7xl space-y-5">
      <div
        v-for="booking in bookings"
        :key="booking.id"
        class="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-lg sm:flex-row"
      >
        <img
          :src="booking.hotelImage"
          :alt="booking.hotelName"
          class="h-44 w-full object-cover sm:h-auto sm:w-48"
        />

        <div class="flex flex-1 flex-col p-5">
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wide text-blue-700">
                {{ booking.hotelName }}
              </p>
              <h2 class="text-lg font-bold text-blue-900">
                {{ booking.roomType }}
              </h2>
            </div>
            <span
              class="rounded-full px-3 py-1 text-xs font-semibold"
              :class="
                booking.status === 'Confirmed'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              "
            >
              {{ booking.status }}
            </span>
          </div>

          <!-- Details -->
          <div class="mt-3 grid grid-cols-2 gap-3 text-sm text-blue-600">
            <p class="flex items-center gap-2">
              <i class="bi bi-calendar-check text-blue-500"></i>
              {{ formatDate(booking.checkIn) }} - {{ formatDate(booking.checkOut) }}
            </p>
            <p class="flex items-center gap-2">
              <i class="bi bi-people-fill text-blue-500"></i>
              {{ booking.guests }} {{ t("guest") }}
            </p>
            <p class="flex items-center gap-2">
              <i class="bi bi-person-fill text-blue-500"></i>
              {{ booking.fullName }}
            </p>
            <p class="flex items-center gap-2">
              <i class="bi bi-ticket text-blue-500"></i>
              {{ booking.id }}
            </p>
          </div>

          <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-blue-600">
            <span class="flex items-center gap-2">
              <i
                :class="booking.amountPaid && booking.amountPaid > 0
                  ? 'bi bi-check-circle-fill text-emerald-600'
                  : 'bi bi-circle text-blue-400'"
              ></i>
              <span>
                <strong class="text-emerald-700">${{ booking.amountPaid ?? booking.price }}</strong>
                {{ t("paid via") }} {{ booking.paymentMethod || t("Not specified") }}
              </span>
            </span>
            <span v-if="(booking.balanceDue ?? 0) > 0" class="flex items-center gap-2">
              <i class="bi bi-hotel-fill text-blue-500"></i>
              <strong class="text-emerald-600">${{ booking.balanceDue }}</strong>
              {{ t("at check-in") }}
            </span>
            <span v-if="booking.cardLast4" class="flex items-center gap-2">
              <i class="bi bi-credit-card-2-front text-blue-500"></i>
              {{ t("Card") }} •••• {{ booking.cardLast4 }}
            </span>
          </div>

          <div class="mt-4 flex items-center justify-between border-t border-blue-200 pt-4">
            <strong class="text-xl font-bold text-blue-900">
              ${{ booking.price }}
            </strong>

            <button
              v-if="booking.status === 'Confirmed'"
              @click="handleCancel(booking.id)"
              class="rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-200"
            >
              {{ t("Cancel Booking") }}
            </button>
            <RouterLink
              :to="'/hotel/' + booking.hotelId"
              v-else
              class="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-200"
            >
              {{ t("View Hotel") }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { bookings, cancelBooking } from "../store/booking"
import { t } from "../i18n"

const handleCancel = (id: string) => {
  if (confirm(t("Are you sure you want to cancel this booking?"))) {
    cancelBooking(id)
  }
}

const formatDate = (date: string) => {
  const d = new Date(date + "T00:00:00")
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })
}
</script>