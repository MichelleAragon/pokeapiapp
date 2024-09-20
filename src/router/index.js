import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PokemonsView from '../views/PokemonsView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: PokemonsView,
  },
  // Agregar una ruta catch-all para manejar rutas no encontradas
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/pokeapiapp/'),
  routes,
});

export default router;

