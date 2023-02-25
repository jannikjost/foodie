import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('../views/RecipesView.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
      children: [
        {
          path: 'create',
          name: 'asda',
          component: () => import('../views/CreateView.vue')
        }
      ]
    },
    {
      path: '/create',
      name: 'settings_create',
      component: () => import('../views/CreateView.vue')
    }
  ]
})

export default router
