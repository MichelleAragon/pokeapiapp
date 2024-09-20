<script setup>
import { useRouter } from 'vue-router';
import welcomeImage from '../assets/welcome.png'

const router = useRouter();

const navigateToPokemonList = () => {
  router.push({ name: 'Pokemons' });
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen home">
    <img :src="welcomeImage" alt="Welcome Image" class="mb-8" >
    <h1 class="mb-4 text-4xl font-bold">Welcome to Pokemon World</h1>
    <p class="mb-6 text-lg text-center">Discover your favorite Pokémons. Click the button below to get started!</p>
    <button @click="navigateToPokemonList" class="px-6 py-2 text-white bg-primary rounded-[60px]">
      Go to Pokemon List
    </button>
  </div>
</template>

