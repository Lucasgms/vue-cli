import Vue from 'vue';
import Router from 'vue-router';
import Products from '@/components/Products';
import Profile from '@/components/Profile';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
  ],
});
