import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Admin from '../views/Admin.vue';
import Home from '../views/Home.vue';
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    meta: {
      isGuest: true,
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue'),
    meta: {
      isGuest: true,
    },
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
    meta: {
      isGuest: true,
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      authRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const parsed = localStorage.getItem('vuex');
  const user = JSON.parse(parsed)?.user;

  if (to.matched.some((record) => record.meta.authRequired)) {
    console.log('user is', user);
    if (!user) {
      next();
    } else {
      next({
        path: '/admin',
      });
    }
  } else if (to.matched.some((path) => path.meta.isGuest)) {
    if (user) {
      next({
        path: '/',
        name: 'Home',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
