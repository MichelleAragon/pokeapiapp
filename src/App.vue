<script setup>
import PokemonsList from "./components/PokemonsList.vue";

import axiosClient from "./utils/axios";
import { onMounted, ref } from "vue";

const pokemons = ref([]);

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
</script>

<template>
  <div>
    <PokemonsList :pokemons="pokemons" />
  </div>
</template>
