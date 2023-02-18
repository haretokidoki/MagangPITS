import { createWebHashHistory, createRouter } from "vue-router";
import HomePage from '@/views/HomePage.vue';
import DocumentPage from '@/views/DocumentPage.vue';
import LoginPage from '@/views/LoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/document',
    name: 'document',
    component: DocumentPage
  },
  {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
