import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'Главная' }
    },
    {
      path: '/cheatsheet',
      name: 'cheatsheet',
      component: () => import('@/views/CheatsheetView.vue'),
      meta: { title: 'Шпаргалки' }
    },
    {
      path: '/tests',
      name: 'tests',
      component: () => import('@/views/TestsView.vue'),
      meta: { title: 'Тесты' }
    },
    {
      path: '/tests/:id',
      name: 'test',
      component: () => import('@/views/TestView.vue'),
      meta: { title: 'Тест' }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Приложение';
  next();
});

export default router;