<script setup>
import PokemonItem from "./PokemonItem.vue";
import { defineProps } from "vue";

const props = defineProps(["pokemons"]);
</script>

<template>
  <div class="mx-auto px-[30px] md:px-0 md:max-w-[560px]">
    <div
      v-for="pokemon in pokemons.results"
      :key="pokemon.name"
      class="flex h-[60px] font-medium w-full text-dark bg-white text-2xl capitalize rounded-[5px] mb-2.5 items-center pl-5 justify-between"
    >
      <PokemonItem :pokemon="pokemon" />
    </div>
  </div>
</template>
