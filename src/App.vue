<script setup>
import { ref, onMounted } from "vue";
import { getPokemonByName, getPokemonDetails } from "./utils/axios";
import PokemonList from "./components/PokemonsList.vue";
import SearchPokemon from "./components/SearchPokemon.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import FavoritePokemonList from './components/FavoritePokemonList.vue';
import EmptyList from './components/EmptyList.vue';
import NavigationButtons from './components/NavigationButtons.vue';

// Data
const pokemonData = ref([]);
const filteredPokemons = ref([]);
const searchTerm = ref("");
const isLoading = ref(true);
const selectedFavoritesPokemons = ref([]);

// View State
const currentView = ref('all'); // 'all' or 'favorites'

onMounted(async () => {
  setTimeout(async () => {
    pokemonData.value = await getPokemonByName();
    isLoading.value = false;
  }, 2500);
});

const handleFilteredPokemons = (filteredPokemonsData) => {
  filteredPokemons.value = filteredPokemonsData;
};


const addOrRemoveFavorite = (pokemon) => {
  const index = selectedFavoritesPokemons.value.findIndex(fav => fav.name === pokemon.name);
  if (index === -1) {
    selectedFavoritesPokemons.value.push(pokemon);
  } else {
    selectedFavoritesPokemons.value.splice(index, 1);
  }
};

// Button Handlers to Switch Views
const showAllPokemons = () => {
  currentView.value = 'all';
};

const showFavoritePokemons = () => {
  currentView.value = 'favorites';
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

      <!-- All Pokémons View -->
      <div v-if="currentView === 'all'">
        <template v-if="searchTerm">
          <template v-if="filteredPokemons.length > 0">
            <PokemonList 
              :pokemonData="filteredPokemons"
              :selectedFavoritesPokemons="selectedFavoritesPokemons" 
              :addOrRemoveFavorite="addOrRemoveFavorite"
            />
          </template>
          <template v-else>
            <EmptyList />
          </template>
        </template>
        <template v-else>
          <PokemonList 
            :pokemonData="pokemonData"
            :selectedFavoritesPokemons="selectedFavoritesPokemons" 
            :addOrRemoveFavorite="addOrRemoveFavorite"
          />
          <EmptyList v-if="pokemonData.length === 0"/>
        </template>
      </div>

      <!-- Favorites View -->
      <div v-else>
       <FavoritePokemonList
          :favoritePokemons="selectedFavoritesPokemons"
          :addOrRemoveFavorite="addOrRemoveFavorite"
          :fetchPokemonDetails="getPokemonDetails"
        />
      </div>

<!-- Navigation Buttons Component -->
      <NavigationButtons 
        :currentView="currentView"
        @showAllPokemons="showAllPokemons"
        @showFavoritePokemons="showFavoritePokemons"
      />
    </template>
  </div>
</template>