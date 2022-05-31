<!--
 * @Author: wangrui
 * @Date: 2022-04-11 14:06:27
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-04-12 15:12:46
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { useRouter } from 'vue-router';
const router = useRouter();
// var aa = 1
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <div>11</div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <button @click="() => router.push({ path: './home' })">首页</button>
  <button @click="() => router.push({ path: './mine' })">个人</button>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
