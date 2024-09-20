<script setup>
import { useRouter } from 'vue-router';
import welcomeImage from '../assets/welcome.png'

const router = useRouter();

const navigateToPokemonList = () => {
  router.push({ name: 'Pokemons' });
};
</script>

<template>
  <div class="w-[325px] sm:w-[570px] flex flex-col items-center justify-center h-screen home m-auto">
    <img :src="welcomeImage" alt="Welcome Image" class="mb-[60px]" >
    <h1 class="mb-[30px] text-3xl font-bold">Welcome to Pokédex</h1>
    <p class="mb-[50px] text-base font-medium text-center">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
    <button @click="navigateToPokemonList" class="primary-buttons px-6 py-2 text-white text-base font-bold bg-primary rounded-[60px]">
      Get started
    </button>
  </div>
</template>

