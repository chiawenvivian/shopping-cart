import { createRouter, createWebHistory } from 'vue-router';
// 先將4個頁面做引入
import CheckinfoView from '@/views/CheckinfoView.vue';
import OrderView from '@/views/OrderView.vue';
import ProductView from '@/views/ProductView.vue';
import ShoppingCartView from '@/views/ShoppingCartView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/checkinfo',
      name: 'checkinfo',
      component: CheckinfoView,
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView,
    },
    {
      path: '/',
      name: 'product',
      component: ProductView,
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: ShoppingCartView,
    },
  ]
})

export default router
