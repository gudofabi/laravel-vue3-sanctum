import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


// import middleware rule
import middleware from './middleware';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: middleware.user,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/LoginView.vue'),
      beforeEnter: middleware.guest,
    },
    {
      path: '/job-post',
      name: 'job-post',
      component: () => import('../views/JobPostView.vue'),
    },
  ]
})

export default router
