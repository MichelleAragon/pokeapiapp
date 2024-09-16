<script setup>
import PokemonItem from "./PokemonItem.vue";
import { defineProps } from "vue";

const props = defineProps(["pokemons"]);
</script>

<template>
  <div>
    <template v-if="pokemons.length">
      <div
        v-for="pokemonName in pokemons"
        :key="pokemonName"
        class="flex h-[60px] font-medium w-full text-dark bg-white text-2xl capitalize rounded-[5px] mb-2.5 items-center pl-5 justify-between"
      >
        <PokemonItem :pokemon="{ name: pokemonName }" />
      </div>
    </template>
    <template v-else>
      <div class="mt-4 text-center text-gray-500">No existe ese nombre de Pokemon</div>
    </template>
  </div>
</template>
