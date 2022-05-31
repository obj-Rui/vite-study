<!--
 * @Author: wangrui
 * @Date: 2022-04-11 15:40:30
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-04-14 17:13:46
-->
<script setup lang="ts">
// import { ElMessage } from "element-plus";
import { getCurrentInstance, ref } from 'vue';
import { request } from '@/utils/request';

const { proxy } = getCurrentInstance();
const open = () => {
  proxy.$message('this is a message.');
};
const jokeList = ref([]);
const joke = async () => {
  const params = {
    app_key: '6ADFE3D332CA0AF50A3D914CB19EC4D2',
    num: 2,
  };
  const res = await request.get(
    'http://hn216.api.yesapi.cn/api/App/Common_Joke/RandOne',
    params
  );
  console.log(res);
  jokeList.value = res.joke[0];
};
joke();
</script>

<template>
  首页
  <div class="aa" v-for="item in jokeList" :key="item.id">{{ item }}</div>
  <el-button disabled>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success" @click="open">Success</el-button>
  <el-button type="info" disabled>Info</el-button>
  <el-button type="warning" disabled>Warning</el-button>
  <el-button type="danger" disabled>Danger</el-button>
</template>

<style scoped lang="scss">
.aa {
  background: rgba(255, 255, 255, 0.1);
  height: 200px;
  width: 100%;
  padding: 0 100px;
  box-sizing: border-box;
}
</style>
