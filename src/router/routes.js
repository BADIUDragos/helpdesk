import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/issues',
    name: 'issues',
    component: () => import('@/views/Issues.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
];

export default {
  routes,
};
