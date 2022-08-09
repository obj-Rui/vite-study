<!--
 * @Author: wangrui
 * @Date: 2022-04-11 15:40:20
 * @LastEditors: wangrui
 * @Description: 11
 * @LastEditTime: 2022-06-01 15:41:21
-->
<script setup lang="ts">
import { request } from '@/utils/request';
import { ref } from 'vue';
const list = ref([]);
const getSweet = async () => {
  const params = {
    type: 'json',
  };
  const res: any = await request.get('/api/SweetNothings', { ...params });
  list.value = res.returnObj;
};

getSweet();
</script>

<template>
  <div v-for="item in list" :key="item">{{ item }}</div>
  <el-button @click="getSweet">Default</el-button>
</template>

<style></style>
