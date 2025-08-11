import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheatsheetView from '../views/CheatsheetView.vue'
import TestsView from '../views/TestsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cheatsheet',
      name: 'cheatsheet',
      component: CheatsheetView
    },
    {
      path: '/tests',
      name: 'tests',
      component: TestsView
    }
  ]
})

export default router