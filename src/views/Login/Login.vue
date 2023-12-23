<!-- 登录页 -->
<template>
    <div class="Login">
        <LoginForm v-if="showLogin" />
    </div>
</template>

<script setup>
import LoginForm from './components/LoginForm'
import RegisteForm from './components/RegisterForm.vue'
import { ref } from 'vue'

const showLogin = ref(true)

</script>
<style scoped lang="less">
.Login {}
</style>