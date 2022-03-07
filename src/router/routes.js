import VueRouter from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import LogInRegisterPage from '@/pages/LogInRegisterPage';
import ThePost from '@/components/ThePost';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }, 
  {
    path: '/login',
    name: 'LogIn',
    component: LogInRegisterPage
  },
  {
    path: '/blog/post/:number',
    name: 'ThePost',
    component: ThePost
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;