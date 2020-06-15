import VueRouter      from 'vue-router';

import Home from '@/views/home';
import Calculator from '@/views/calculator';
import CalculatorPart from '@/views/calculator/_part';
import ProductModal from '@/components/products/productModal'


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: Calculator,
    redirect: { name: '_part', params: { part: 'processor' } },
    children: [
      {
        path: '/calculator/:part',
        name: '_part',
        component: CalculatorPart,
        children: [
          {
            path: ':name',
            name: 'product_details',
            component: ProductModal
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: 'perfect-pc',
  routes
})
export default router