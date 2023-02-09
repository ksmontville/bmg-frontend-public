import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventsView from '../views/EventsView.vue'
import AboutView from '../views/AboutView.vue'
import ShopView from '../views/ShopView.vue'
import SinglesStoreView from '../views/SinglesStoreView.vue'
import AdminView from '../views/AdminView.vue'
import MaintenancePage from '../views/MaintenancePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
    },
    {
      path: '/singles',
      name: 'singles',
      component: SinglesStoreView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: MaintenancePage
    },

  ]
})

export default router
