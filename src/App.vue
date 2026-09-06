<script setup lang="ts">
import { ref } from 'vue';
import Login from './components/Login.vue';



const showLogin=ref(true)
const loginSuccess=()=>{
  showLogin.value=false
}
</script>

<template>
  <!-- Login Popup-->
 <Login v-if="showLogin"
    @login-success="loginSuccess"/>
 
</template>
