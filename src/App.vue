<script setup>
import PokemonsList from "./components/PokemonsList.vue";

import axiosClient from "./utils/axios";
import { onMounted, ref } from "vue";

const pokemons = ref([]);
const searchTerm = ref("");
const filteredPokemons = ref([]);

const getPokemons = async () => {
  try {
    const { data } = await axiosClient.get("/pokemon");
    pokemons.value = data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getPokemons();
});

// const filterPokemons = () => {
//   const searchValue = searchTerm.value.toLowerCase();
  
//   filteredPokemons.value = pokemons.value.results.filter((pokemon) =>
//     pokemon.name.toLowerCase().includes(searchValue)
//   ).map((pokemon) => pokemon.name);
  
//   console.log(filteredPokemons.value);
// }
const filterPokemons = () => {
  const searchValue = searchTerm.value.toLowerCase();
  
  filteredPokemons.value = pokemons.value.results.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue)
  ).map((pokemon) => pokemon.name);
  
  console.log(filteredPokemons.value);
}

</script>

<template>
  <div class="mx-auto px-[30px] md:px-0 md:max-w-[560px]">
    <input
      type="text"
      placeholder="Search"
      class="w-full mb-2.5 h-[60px]"
      v-model="searchTerm"
      @input="filterPokemons"
    />
    <PokemonsList :pokemons="filteredPokemons"  :searchTerm="searchTerm"/>
  </div>
</template>
