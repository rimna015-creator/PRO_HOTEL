<script setup lang="ts">
import { ref } from 'vue';
import Login from './components/Login.vue';
import CreateAccount from './components/CreateAccount.vue';



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
</script>

<template>
  <!-- Login Popup-->
 <Login 
    v-if="showLogin"
    @login-success="loginSuccess"
    @create-account="gotocreateAccount"/>
 <CreateAccount 
    v-if="showCreateAccount"
    @go-to-login="goToLogin"/>
</template>
