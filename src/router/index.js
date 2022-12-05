import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewProductView from '../views/NewProductView.vue'
import SinglesView from '../views/SinglesView.vue'
import ShopView from '../views/ShopView.vue'
import EventsView from '../views/EventsView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/singles',
      name: 'singles',
      component: SinglesView
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
    }

  ]
})

export default router
