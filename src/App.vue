<script setup>
import { ref, onMounted } from "vue";
import { getPokemonByName } from "./utils/axios";
import PokemonList from "./components/PokemonsList.vue";
import SearchPokemon from "./components/SearchPokemon.vue";

const pokemonData = ref([]);
const filteredPokemons = ref([]);
const searchTerm = ref('');

onMounted(async () => {
  pokemonData.value = await getPokemonByName();
});

const handleFilteredPokemons = (filteredPokemonsData) => {
  filteredPokemons.value = filteredPokemonsData;
};

</script>

<template>
  <div class="mx-auto px-[30px] md:px-0 md:max-w-[560px]">
    <SearchPokemon :pokemonData="pokemonData" v-model:searchTerm="searchTerm" @update:filteredPokemons="handleFilteredPokemons" />
    <PokemonList :pokemonData="filteredPokemons" />
  </div>
</template>