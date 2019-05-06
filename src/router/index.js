import Vue from 'vue'
import Router from 'vue-router'
import Registration from '@/components/Auth/Registration'
import Home from '@/components/home'
import Login from '@/components/Auth/login'
import Men from '@/components/Product/men'
import Women from '@/components/Product/women'
import Boys from '@/components/Product/boys'
import Girls from '@/components/Product/girls'
import Basket from '@/components/Product/basket'
import Search from '@/components/Product/search'
import Product from '@/components/Product/product'
import AddProduct from '@/components/Product/addProduct'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/men',
      name: 'Men',
      component: Men
    },
    {
      path: '/women',
      name: 'Women',
      component: Women
    },
    {
      path: '/boys',
      name: 'Boys',
      component: Boys
    },
    {
      path: '/girls',
      name: 'Girls',
      component: Girls
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/product/:id',
      props:true,
      name: 'Product',
      component: Product
    },
    {
      path:'/addProduct',
      name:'AddProduct',
      component: AddProduct
    },
    {
      path:'*',
      component:Home
    }
  ],
  mode: 'history'
})
