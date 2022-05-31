<!--
 * @Author: wangrui
 * @Date: 2022-04-11 15:40:20
 * @LastEditors: wangrui
 * @Description: 11
 * @LastEditTime: 2022-04-14 17:13:55
-->
<script setup lang="ts">
import { request } from '@/utils/request';
import { ref } from 'vue';
const list = ref([]);
const getSweet = async () => {
  const params = {
    type: 'json',
  };
  const res = await request.get('/api/SweetNothings', params);
  list.value = res.returnObj;
};

getSweet();
</script>

<template>
  <div v-for="item in list" :key="item">{{ item }}</div>
  <el-button @click="getSweet">Default</el-button>
</template>

<style></style>
