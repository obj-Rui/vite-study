/*
 * @Author: wangrui
 * @Date: 2022-04-11 14:06:27
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-04-12 15:26:03
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.config.globalProperties.$message = ElMessage;
app.use(router);
app.mount('#app');
