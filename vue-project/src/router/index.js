import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheatsheetView from '../views/CheatsheetView.vue'
import TestsView from '../views/TestsView.vue'
import TestView from '../views/TestView.vue'

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
    },
    {
      path: '/tests/:id', // Динамический маршрут с параметром :id
      name: 'test',
      component: TestView
    }
  ]
})

export default router