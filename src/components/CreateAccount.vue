<template>
  <!-- Create Account Form -->
<div class="space-y-5 sm:p-2 bg-white rounded-2xl">
  <div class="text-center font-bold text-2xl p-0">{{ t("Create An Account") }}</div>
  <div v-if="!accountCreated" class="space-y-5 sm:p-3">

    <!-- Full Name -->

    <div>
      <label
        for="name"
        class="block text-base font-semibold text-blue-900"
      >
        {{ t("Full Name") }}
      </label>

      <input
        id="name"
        v-model="name"
        type="text"
        :placeholder="t('Enter your full name')"
        class="mt-2.5 block w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-blue-900 placeholder:text-blue-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
      />
    </div>


    <!-- Email -->

    <div>
      <label
        for="email"
        class="block text-base font-semibold text-blue-900"
      >
        {{ t("Email Address") }}
      </label>

      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="you@email.com"
        class="mt-2.5 block w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-blue-900 placeholder:text-blue-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
      />
    </div>


    <!-- Password -->

    <div>
      <label
        for="password"
        class="block text-base font-semibold text-blue-900"
      >
{{ t("Password") }}
      </label>

      <div class="relative mt-2.5">

        <input
          id="password"
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          :placeholder="t('Create a password')"
          class="block w-full rounded-xl border border-blue-200 bg-white px-4 py-3 pr-12 text-blue-900 placeholder:text-blue-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
        />

        <!-- Eye Button -->

        <button
          type="button"
          @click="showPassword = !showPassword"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-700"
        >
          <i
            :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
            ></i>
        </button>

      </div>
    </div>


    <!-- Confirm Password -->

    <div>
      <label
        for="confirmPassword"
        class="block text-base font-semibold text-blue-900"
      >
        {{ t("Confirm Password") }}
      </label>

      <div class="relative mt-2.5">

        <input
          id="confirmPassword"
          v-model="confirmPassword"
          :type="showConfirmPassword ? 'text' : 'password'"
          :placeholder="t('Confirm your password')"
          class="block w-full rounded-xl border border-blue-200 bg-white px-4 py-3 pr-12 text-blue-900 placeholder:text-blue-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
        />

        <!-- Eye Button -->

        <button
          type="button"
          @click="showConfirmPassword = !showConfirmPassword"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-700"
        >
          <i
            :class="showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
            ></i>
        </button>

      </div>
    </div>


    <!-- Create Account Button -->

    <div class="pt-2">

      <button
        @click="createAccount"
        class="flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-700 hover:shadow-blue-900/30 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.98]"
      >
        {{ t("Create Account") }}
      </button>

    </div>


    <!-- Sign In -->

    <div class="pt-2 text-center">

      <p class="text-blue-600">
        {{ t("Already have an account?") }}

        <button
          @click="goToLogin"
          class="font-semibold text-blue-700 hover:text-blue-900"
        >
          {{ t("Sign In") }}
        </button>
      </p>

    </div>

  </div>
    <div
    v-else
    class="p-8 text-center sm:p-10"
  >

    <div
      class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
    >
      <i class="bi bi-check-lg text-3xl text-green-600"></i>
    </div>

    <h2 class="text-2xl font-bold text-blue-900">
      {{ t("Account Created Successfully!") }}
    </h2>

    <p class="mt-3 text-blue-600">
      {{ t("Your AngkorBooking account has been created.") }}
    </p>

    <p class="text-blue-600">
      {{ t("You are now signed in.") }}
    </p>

    <button
      @click="finishSignUp"
      class="mt-6 w-full rounded-2xl bg-blue-600 px-6 py-3 text-lg font-bold text-white hover:bg-blue-700"
    >
      {{ t("Continue to My Account") }}
    </button>

  </div>
</div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { t } from '../i18n'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const accountCreated=ref(false)
const emit = defineEmits([
  'create-success',
  'go-to-login'
])


const createAccount = () => {
  if (
    !name.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    alert(t('Please fill in all fields'))
    return
  }

  if (password.value !== confirmPassword.value) {
    alert(t('Passwords do not match'))
    return
  }
  accountCreated.value=true
}
const finishSignUp = () => {
  emit('create-success', {
    name: name.value,
    email: email.value
  })
}
const goToLogin = () => {
  emit('go-to-login')
}
</script>