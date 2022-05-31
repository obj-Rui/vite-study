/*
 * @Author: wangrui
 * @Date: 2022-04-11 15:32:29
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-04-13 10:58:50
 */
import { createRouter, createWebHashHistory } from 'vue-router';
const routers = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    meta: {
      title: '',
      keepalive: false,
    },
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine/index.vue'),
    meta: {
      title: '',
      keepalive: false,
    },
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
});
export default router;
