import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    { path: '/', name: 'Home', component: () => import('@/views/Home.vue') }, 
    { path: '/about', name: 'About', component: () => import('@/views/About.vue') }, 
    { path: '/auth', name: 'Auth', component: () => import('@/views/Auth.vue') }, 
  ]
})

export default router