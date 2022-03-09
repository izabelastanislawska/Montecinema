import VueRouter from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import ContactPage from '@/pages/ContactPage';
import MoviesPage from '@/pages/MoviesPage';
import ScreeningsPage from '@/pages/ScreeningsPage';
import LogInRegisterPage from '@/pages/LogInRegisterPage';
import ThePost from '@/components/ThePost';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }, 
  {
    path: '/movies',
    name: 'Movies',
    component: MoviesPage
  },
  {
    path: '/screenings',
    name: 'Screenings',
    component: ScreeningsPage
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