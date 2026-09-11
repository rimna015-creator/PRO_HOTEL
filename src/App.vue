<script setup lang="ts">
import Login from './components/Login.vue';
import CreateAccount from './components/CreateAccount.vue';
import Navbar from './components/Navbar.vue';
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
  >
    <div class="w-full max-w-md">
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
  >
    <div class="w-full max-w-md">
      <CreateAccount
        @go-to-login="openLogin"
        @create-success="createSuccess"
      />
    </div>
  </div>
</template>