<script setup>
import { defineProps, ref } from "vue";
import PokemonItem from "./PokemonItem.vue";
import EmptyList from "./EmptyList.vue";
import PokemonModal from "./PokemonModal.vue";

const props = defineProps(["pokemonData", "selectedFavoritesPokemons", "addOrRemoveFavorite", "fetchPokemonDetails"]);
const selectedPokemon = ref(null);
const isModalVisible = ref(false);

const openModal = async (pokemon) => {
  const details = await props.fetchPokemonDetails(pokemon.name);
  selectedPokemon.value = details;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  selectedPokemon.value = null;
};

</script>

<template>
  <div v-if="pokemonData.length === 0">
    <EmptyList />
  </div>
  <div v-else>
    <ul class="mb-24">
      <li
        v-for="pokemon in pokemonData"
        :key="pokemon.name"
        class="flex h-[60px] font-medium w-full text-dark bg-white text-2xl capitalize rounded-[5px] mb-2.5 items-center pl-5 justify-between"
      >
        <PokemonItem :pokemon="pokemon" 
          :isFavorite="selectedFavoritesPokemons.some(fav => fav.name === pokemon.name)"
          :addOrRemoveFavorite="addOrRemoveFavorite"
          :openModal="openModal"
          />
      </li>
    </ul>
  </div>
    <PokemonModal
    v-if="selectedPokemon"
    :pokemon="selectedPokemon"
    :isFavorite="selectedFavoritesPokemons.some(p => p.name === selectedPokemon.name)"
    :show="isModalVisible"
    :close="closeModal"
    :toggleFavorite="addOrRemoveFavorite"
  />
</template>
