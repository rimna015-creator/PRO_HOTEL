<script setup lang="ts">
import { ref } from 'vue';
import Login from './components/Login.vue';
import CreateAccount from './components/CreateAccount.vue';



const showLogin=ref(true)
const loginSuccess=()=>{
  showLogin.value=false
}
const showCreateAccount=ref(false)
const gotocreateAccount=()=>{
  showLogin.value=false
  showCreateAccount.value=true
}
</script>

<template>
  <!-- Login Popup-->
 <Login v-if="showLogin"
    @login-success="loginSuccess"
    @create-account="showCreateAccount=true"/>
 <CreateAccount v-if="showCreateAccount"
  @back-to-login="showCreateAccount=false"/>
</template>
