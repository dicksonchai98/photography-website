import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import path from 'path'
import AboutView from '@/views/AboutView.vue'
import PackageView from '@/views/PackageView.vue'
import ContactView from '@/views/ContactView.vue'
import ProductView from '@/views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/package',
      name: 'package',
      component: PackageView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    }
  ]
})

export default router
