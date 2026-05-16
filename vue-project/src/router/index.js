import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '@/composables/useAuth';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { title: 'AI Академия' }
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('@/views/LearnView.vue'),
    meta: { title: 'Маршрут обучения' }
  },
  {
    path: '/arena',
    name: 'arena',
    component: () => import('@/views/ArenaView.vue'),
    meta: { title: 'Practice Arena' }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/ProjectsView.vue'),
    meta: { title: 'Real Projects' }
  },
  {
    path: '/ml-lab',
    name: 'ml-lab',
    component: () => import('@/views/MlPlaygroundView.vue'),
    meta: { title: 'ML Playground' }
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('@/views/TeacherDashboardView.vue'),
    meta: { title: 'AI Teacher Dashboard' }
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth();
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/');
    return;
  }

  document.title = `${to.meta.title || 'AI Академия'} | CodeSpark`;
  next();
});

export default router;
