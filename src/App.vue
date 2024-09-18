<script setup>
import { ref, onMounted } from "vue";
import { getPokemonByName } from "./utils/axios";
import PokemonList from "./components/PokemonsList.vue";
import SearchPokemon from "./components/SearchPokemon.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";

const pokemonData = ref([]);
const filteredPokemons = ref([]);
const searchTerm = ref("");
const isLoading = ref(true);

onMounted(async () => {
  setTimeout(async () => {
    pokemonData.value = await getPokemonByName();
    isLoading.value = false;
  }, 6000);
});

const handleFilteredPokemons = (filteredPokemonsData) => {
  filteredPokemons.value = filteredPokemonsData;
};
</script>

<template>
  <div class="mx-auto px-[30px] md:px-0 md:max-w-[560px]">
    <template v-if="isLoading">
      <LoadingSpinner />
    </template>
    <template v-else>
      <SearchPokemon
        :pokemonData="pokemonData"
        v-model:searchTerm="searchTerm"
        @update:filteredPokemons="handleFilteredPokemons"
      />
      <PokemonList :pokemonData="filteredPokemons" />
    </template>
  </div>
</template>
