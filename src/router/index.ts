import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',

      component: () => import('../pages/index.vue')
    },
  ]
})



export default router