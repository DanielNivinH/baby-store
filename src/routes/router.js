import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/HomePage.vue';
import Shop from '@/pages/ShopPage.vue';
import Product from '@/pages/ProductPage.vue';
import Cart from '@/pages/CartPage.vue';
import Login from '@/pages/LoginPage.vue';
import Register from '@/pages/RegisterPage.vue';
import Contact from '@/pages/ContactPage.vue';

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
      path: '/products:filter?',
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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
}); 