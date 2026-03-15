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
    },
    {
      path: '/create',
      name: 'CreateItem',
      component: () => import('../pages/CreateItem.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../pages/Login.vue')
    }
  ],
})

export default router
