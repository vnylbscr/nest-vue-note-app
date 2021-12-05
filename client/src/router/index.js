import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue'),
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
