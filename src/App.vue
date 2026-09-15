<script setup lang="ts">
import Login from './components/Login.vue';
import CreateAccount from './components/CreateAccount.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { saveUser, type UserAccount } from './store/user';
import {
  showLoginModal,
  showCreateAccountModal,
  openCreateAccount,
  openLogin,
  closeAuthModals
} from './store/ui';


const loginSuccess = (data: { name: string; email: string }) => {
  const user: UserAccount = {
    id: Date.now(),
    name: data.name,
    email: data.email,
    joinedAt: new Date().toISOString()
  }
  saveUser(user)
  closeAuthModals()
}

const createSuccess = (data: { name: string; email: string }) => {
  const user: UserAccount = {
    id: Date.now(),
    name: data.name,
    email: data.email,
    joinedAt: new Date().toISOString()
  }
  saveUser(user)
  closeAuthModals()
}
</script>

<template>
  <nav>  
  <Navbar/>
  </nav>
  <router-view></router-view>
  <!-- Login Popup-->
  <div
    v-if="showLoginModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    @click.self="closeAuthModals"
  >
    <div class="relative w-full max-w-md">
      <button
        type="button"
        @click="closeAuthModals"
        title="Close"
        aria-label="Close"
        class="absolute right-4 top-4 rounded-full bg-gray-100 p-2.5 text-gray-500 transition hover:bg-gray-200 hover:text-gray-700 hover:scale-110"
      >
        <i class="bi bi-x-lg"></i>
      </button>
      <Login
        @login-success="loginSuccess"
        @create-account="openCreateAccount"
      />
    </div>
  </div>
<!-- Create Account -->
  <div
    v-if="showCreateAccountModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    @click.self="closeAuthModals"
  >
    <div class="relative w-full max-w-md">
      <button
        type="button"
        @click="closeAuthModals"
        title="Close"
        aria-label="Close"
        class="absolute right-4 top-4 rounded-full bg-gray-100 p-2.5 text-gray-500 transition hover:bg-gray-200 hover:text-gray-700 hover:scale-110"
      >
        <i class="bi bi-x-lg"></i>
      </button>
      <CreateAccount
        @go-to-login="openLogin"
        @create-success="createSuccess"
      />
    </div>
  </div>

  <Footer />
</template>