import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/HomePage.vue';
import Shop from '@/pages/ShopPage.vue';
import Product from '@/pages/ProductPage.vue';
import Cart from '@/pages/CartPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/myCart',
      name: 'myCart',
      component: Cart
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
}); 