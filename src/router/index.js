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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

