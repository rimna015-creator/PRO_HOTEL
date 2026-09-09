<script setup lang="ts">
import { ref } from 'vue';
import Login from './components/Login.vue';
import CreateAccount from './components/CreateAccount.vue';
import Navbar from './components/Navbar.vue';


const showLogin=ref(true)
const showCreateAccount=ref(false)
const gotocreateAccount=()=>{
  showLogin.value=false
  showCreateAccount.value=true
}
const goToLogin=()=>{
  showCreateAccount.value=false
  showLogin.value=true
}
const loginSuccess = () => {
  showLogin.value = false
}
const createSuccess = () => {
  showCreateAccount.value = false
  showLogin.value = true
}
</script>

<template>
  <nav>  
  <Navbar/>
  </nav>
  <router-view></router-view>
  <!-- Login Popup-->
  <div
    v-if="showLogin"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
  >
    <div class="w-full max-w-md">
      <Login
        @login-success="loginSuccess"
        @create-account="gotocreateAccount"
      />
    </div>
  </div>
<!-- Create Account -->
  <div
    v-if="showCreateAccount"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
  >
    <div class="w-full max-w-md">
      <CreateAccount
        @go-to-login="goToLogin"
        @create-success="createSuccess"
      />
    </div>
  </div>
</template>
