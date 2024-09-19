<script setup>
import { defineProps } from "vue";
import PokemonItem from "./PokemonItem.vue";
import EmptyList from "./EmptyList.vue";

const props = defineProps(["pokemonData", "selectedFavoritesPokemons", "addOrRemoveFavorite"]);
</script>

<template>
  <div v-if="pokemonData.length === 0">
    <EmptyList />
  </div>
  <div v-else>
    <ul>
      <li
        v-for="pokemon in pokemonData"
        :key="pokemon.name"
        class="flex h-[60px] font-medium w-full text-dark bg-white text-2xl capitalize rounded-[5px] mb-2.5 items-center pl-5 justify-between"
      >
        <PokemonItem :pokemon="pokemon" 
          :isFavorite="selectedFavoritesPokemons.some(fav => fav.name === pokemon.name)"
          :addOrRemoveFavorite="addOrRemoveFavorite"
          />
      </li>
    </ul>
  </div>
</template>
