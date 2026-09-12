<template>
  <div class="min-h-screen bg-gray-100 pt-20">

    <div v-if="hotel" class="mx-auto max-w-4xl px-6 pb-16">

      <!-- Back Button -->
      <button
        @click="$router.back()"
        class="fixed left-4 top-24 z-30 flex items-center gap-2 rounded-lg bg-blue-300 px-4 py-1.5 shadow-md transition hover:shadow-lg"
      >
        <i class="bi bi-arrow-left text-lg"></i>
        <span class="font-medium">{{ t("Back to Hotels") }}</span>
      </button>

      <!-- Hero Image -->
      <div class="overflow-hidden rounded-2xl shadow-lg">
        <img
          :src="hotel.image"
          :alt="hotel.name"
          class="h-[400px] w-full object-cover"
        />
      </div>

      <!-- Main Info -->
      <div class="mt-6 rounded-2xl bg-white p-8 shadow-md">

        <!-- Name + Type + Stars -->
        <div class="flex flex-wrap items-center gap-3">
          <h1 class="text-3xl font-bold text-black">
            {{ hotel.name }}
          </h1>
          <span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-black">
            {{ hotel.type }}
          </span>
          <span class="flex items-center gap-1 text-sm text-blue-500">
            <i class="bi bi-star-fill"></i>
            {{ hotel.stars }} {{ t("Stars") }}
          </span>
        </div>

        <!-- Rating + Reviews -->
        <div class="mt-3 flex items-center gap-4 text-sm text-black">
          <span class="flex items-center gap-1">
            <i class="bi bi-star-fill text-blue-500"></i>
            <span class="font-semibold text-blue-500">{{ hotel.rating }}</span>
          </span>
          <span>({{ hotel.reviewer }} {{ t("reviews") }})</span>
        </div>

        <!-- Location -->
        <div class="mt-3 flex items-center justify-between">
          <p class="flex items-center gap-1 text-sm text-black">
            <i class="bi bi-geo-alt-fill text-black"></i>
            {{ hotel.address }}
          </p>

          <!-- Google Maps Button -->
          <button
            class="flex items-center gap-1 rounded-lg bg-blue-400 px-3 py-1.5 text-xs font-medium text-black transition duration-300 hover:bg-blue-700"
            @click="openGoogleMaps"
          >
            <i class="bi bi-map"></i>
            {{ t("View on Google Maps") }}
          </button>
        </div>

        <!-- Price -->
        <div class="mt-4">
          <strong class="text-2xl font-bold text-black">
            ${{ hotel.price }}
          </strong>
          <span class="text-sm text-black"> {{ t("/ night") }}</span>
        </div>

        <!-- Divider -->
        <hr class="my-6 border-gray-200" />

        <!-- Description -->
        <div>
          <h2 class="mb-2 text-xl font-semibold text-black">{{ t("Description") }}</h2>
          <p class="leading-relaxed text-black">
            {{ hotel.description }}
          </p>
        </div>

        <!-- Divider -->
        <hr class="my-6 border-gray-200" />

        <!-- Gallery -->
        <div v-if="hotel.gallery.length">
          <h2 class="mb-3 text-xl font-semibold text-black">{{ t("Gallery") }}</h2>
          <div class="grid grid-cols-3 gap-3">
            <img
              v-for="(img, index) in hotel.gallery"
              :key="index"
              :src="img"
              :alt="hotel.name + ' ' + t('photo') + ' ' + (index + 1)"
              class="h-40 w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <!-- Divider -->
        <hr class="my-6 border-gray-200" />

        <!-- Facilities + Services -->
        <div class="grid grid-cols-2 gap-8">

          <!-- Facilities -->
          <div>
            <h2 class="mb-3 text-xl font-semibold text-black">{{ t("Facilities") }}</h2>
            <ul class="space-y-2">
              <li
                v-for="item in hotel.facilities"
                :key="item"
                class="flex items-center gap-2 text-sm text-black"
              >
                <i class="bi bi-check-circle-fill text-green-400"></i>
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h2 class="mb-3 text-xl font-semibold text-black">{{ t("Services") }}</h2>
            <ul class="space-y-2">
              <li
                v-for="item in hotel.services"
                :key="item"
                class="flex items-center gap-2 text-sm text-black"
              >
                <i class="bi bi-check-circle-fill text-blue-400"></i>
                {{ item }}
              </li>
            </ul>
          </div>

        </div>

        <!-- Divider -->
        <hr class="my-6 border-gray-200" />

        <!-- Room Types -->
        <div>
          <h2 class="mb-4 text-xl font-semibold text-black">{{ t("Room Types") }}</h2>
          <div class="space-y-4">
            <div
              v-for="room in hotel.roomTypes"
              :key="room.name"
              class="rounded-xl border border-gray-200 p-5 transition hover:shadow-md"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-lg font-semibold text-black">
                    {{ room.name }}
                  </h3>
                  <p class="mt-1 text-sm text-black">
                    {{ room.description }}
                  </p>
                  <p class="mt-2 flex items-center gap-1 text-sm text-black">
                    <i class="bi bi-people-fill"></i>
                    {{ t("Up to") }} {{ room.capacity }} {{ t("persons") }}
                  </p>
                  <p class="mt-1 flex items-center gap-1 text-sm" :class="room.available > 0 ? 'text-blue-900' : 'text-black'">
                    <i :class="room.available > 0 ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill'"></i>
                    {{ room.available > 0 ? room.available + ' ' + t('rooms available') : t('Sold out') }}
                  </p>
                </div>
                <div class="text-right">
                  <strong class="text-xl font-bold text-black">
                    ${{ room.price }}
                  </strong>
                  <p class="text-xs text-black">{{ t("/ night") }}</p>
                  <router-link
                    :to="{ path: '/hotel/' + hotel.id + '/book', query: { room: room.name } }"
                    class="mt-2 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    {{ t("Book Now") }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <hr class="my-6 border-gray-200" />

        <!-- Check-in / Check-out -->
        <div class="flex gap-8">
          <div>
            <h2 class="mb-1 text-xl font-semibold text-black">{{ t("Check-in Time") }}</h2>
            <p class="flex items-center gap-2 text-black">
              <i class="bi bi-box-arrow-in-right text-black"></i>
              {{ hotel.checkIn }}
            </p>
          </div>
          <div>
            <h2 class="mb-1 text-xl font-semibold text-black">{{ t("Check-out Time") }}</h2>
            <p class="flex items-center gap-2 text-black">
              <i class="bi bi-box-arrow-right text-black"></i>
              {{ hotel.checkOut }}
            </p>
          </div>
        </div>

        <!-- Divider -->
        <hr class="my-6 border-gray-200" />

        <!-- Policies + Contact -->
        <div class="grid grid-cols-2 gap-8">

          <!-- Policies -->
          <div>
            <h2 class="mb-3 text-xl font-semibold text-black">{{ t("House Rules & Policies") }}</h2>
            <ul class="space-y-2">
              <li
                v-for="policy in hotel.policies"
                :key="policy"
                class="flex items-center gap-2 text-sm text-black"
              >
                <i class="bi bi-info-circle-fill text-black"></i>
                {{ policy }}
              </li>
            </ul>
          </div>

          <!-- Contact Hotel -->
          <div>
            <h2 class="mb-3 text-xl font-semibold text-black">{{ t("Contact Hotel") }}</h2>

            <!-- Hotline -->
            <p class="mb-4 flex items-center gap-2 text-sm text-black">
              <i class="bi bi-telephone-fill text-black"></i>
              <a :href="'tel:' + hotel.contact.hotline" class="transition hover:text-black">
                {{ hotel.contact.hotline }}
              </a>
            </p>

            <!-- Social Media -->
            <div class="flex items-center gap-1">
              <a
                :href="hotel.contact.facebook"
                target="_blank"
                rel="noopener"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg text-white transition hover:bg-blue-700"
                title="Facebook"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                :href="hotel.contact.tiktok"
                target="_blank"
                rel="noopener"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg text-white transition hover:opacity-80"
                title="TikTok"
              >
                <i class="bi bi-tiktok"></i>
              </a>
              <a
                :href="hotel.contact.instagram"
                target="_blank"
                rel="noopener"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 text-lg text-white transition hover:bg-pink-700"
                title="Instagram"
              >
                <i class="bi bi-instagram"></i>
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>

    <!-- Not Found -->
    <div v-else class="flex min-h-[60vh] items-center justify-center">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-black">{{ t("Hotel Not Found") }}</h2>
        <p class="mt-2 text-black">{{ t("The hotel you are looking for does not exist.") }}</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { hotelDetails } from "../Data/hotelDetail"
import { t } from "../i18n"

const route = useRoute()

const hotel = computed(() => {
  const id = Number(route.params.id)
  return hotelDetails.find((h) => h.id === id)
})

const openGoogleMaps = () => {
  const query = encodeURIComponent(`${hotel.value?.name} ${hotel.value?.location}`)
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank")
}
</script>
