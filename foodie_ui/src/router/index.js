import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipesView from '../views/RecipesView.vue'
import FavoritesView from "../views/FavoritesView.vue"
import SettingsView from '../views/SettingsView.vue'
import CreateView from '../views/CreateView.vue'
import PlannerView from '../views/PlannerView.vue'


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
      component: RecipesView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      children: [
        {
          path: 'create',
          name: 'asda',
          component: CreateView
        }
      ]
    },
    {
      path: '/create',
      name: 'settings_create',
      component: CreateView
    },
    {
      path: '/planner',
      name: 'planner',
      component: PlannerView
    }
  ]
})

export default router
