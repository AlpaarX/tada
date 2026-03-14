import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/item/:id',
      name: 'ItemDetails',
      component: () => import('../pages/ItemDetails.vue')
    }
  ],
})

export default router
