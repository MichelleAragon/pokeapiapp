<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  pokemonData: Array
});
</script>

<template>
  <div>
    <h2>Favoritos</h2>
    <ul v-if="pokemonData.length > 0">
      <li
        v-for="pokemon in pokemonData"
        :key="pokemon.name"
        class="flex h-[60px] font-medium w-full text-dark bg-white text-2xl capitalize rounded-[5px] mb-2.5 items-center pl-5 justify-between"
      >
        {{ pokemon.name }}
      </li>
    </ul>
    <p v-else>No hay Pokémones favoritos.</p>
  </div>
</template>








