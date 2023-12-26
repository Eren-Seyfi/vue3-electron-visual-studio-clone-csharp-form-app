import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../view/HomePage.vue') },
  { path: '/about', component: () => import('../view/AboutPage.vue') }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
