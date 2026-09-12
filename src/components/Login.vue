<template>
<!-- Form Area -->
<div class="space-y-5 p-6 sm:p-8 bg-white rounded-2xl">
  <div class="text-2xl text-center font-bold mb-1">{{ t("Welcome back") }}</div>
  <div class="text-2xl text-center font-bold">{{ t("Sign In") }}</div>
  <!-- Email Field -->
  <div>
    <label for="email" class="block text-base font-semibold text-zinc-900">
      {{ t("Email Address") }}
    </label>
    <div class="relative mt-2.5">
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="you@email.com"
        class="block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 "
      />
    </div>
  </div>

  <!-- Password Field -->
  <div>
    <div class="flex items-center justify-between">
      <label for="password" class="block text-base font-semibold text-zinc-900">
        {{ t("Password") }}
      </label>
      <a class="text-sm font-medium text-blue-600 hover:text-blue-700">
        {{ t("Forgot password?") }}
      </a>
    </div>
    <div class="relative mt-2.5">

  <input
    id="password"
    v-model="password"
    :type="showPassword ? 'text' : 'password'"
    placeholder="••••••••••••"
    class="block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 pr-12 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
  />

  <button
    type="button"
    @click="showPassword = !showPassword"
    class="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-blue-600"
  >
   <i
    :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
  ></i> 
  </button>

</div>
  </div>

  <!-- Actions & Sign In Button -->
  <div class="pt-2">
    <button
      @click="login"
      class="flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.98]"
    >
      {{ t("Login In to Your Account") }}
    </button>
  </div>

  <!-- Footer/Sign Up Link -->
  <div class="pt-4 text-center">
    <p class="text-zinc-600">
      {{ t("Don't have an account yet?") }}
      <button
      @click="gotocreateAccount"
      class="font-semibold text-blue-600 hover:text-blue-700"
      >{{ t("Create one for free") }}
      </button>
    </p>
  </div>
</div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { t } from '../i18n'

const email = ref('')
const password = ref('')
const showPassword=ref(false)
const login = () => {

  if (!email.value || !password.value) {
    alert(t('Please enter your email and password'))
    return
  }

  // Derive a display name from the email
  const rawName = email.value.split('@')[0].replace(/[._-]+/g, ' ')
  const name = rawName.charAt(0).toUpperCase() + rawName.slice(1)

  // Tell App.vue that login was successful
  emit('login-success', {
    name,
    email: email.value
  })
}

const emit = defineEmits(['login-success','create-account'])
const gotocreateAccount=()=>{emit('create-account')}
</script>