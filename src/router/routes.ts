import VueRouter from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import MoviesPage from '@/pages/MoviesPage.vue';
import ScreeningsPage from '@/pages/ScreeningsPage.vue';
import LogInPage from '@/pages/LogInPage.vue';
import ThePost from '@/components/ThePost.vue';
import RegisterPage from '@/pages/RegisterPage.vue';
import RegisterSecondStepPage from '@/pages/RegisterSecondStepPage.vue';

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
    component: LogInPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/register-second-step',
    name: 'RegisterSecondStep',
    component: RegisterSecondStepPage
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
