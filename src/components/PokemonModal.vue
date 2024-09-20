<script setup>
import { defineProps, computed } from "vue";
import backgroundImage from "../assets/mask-image-modal.png";

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
  toggleFavorite: {
    type: Function,
    required: true,
  },
});

// Método computado para obtener los nombres de los tipos
const pokemonTypes = computed(() => {
  return props.pokemon.types.map((typeObject) => typeObject.type.name);
});

const sharePokemon = () => {
  const pokemonName = props.pokemon.name;
  const abilities = props.pokemon.abilities.map(a => a.ability.name).join(', ');

  const details = `Name: ${pokemonName}, Abilities: ${abilities}`;

  navigator.clipboard.writeText(details)
    .then(() => {
      console.log('Copied to clipboard successfully!');
    })
    .catch(err => {
      console.error('Could not copy text: ', err);
    });
};

</script>
<template>
  <!-- Modal Background -->
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <!-- Modal Content -->
    <div
      class="relative w-[315px] h-auto bg-white shadow-lg rounded-2xl sm:w-[570px] modal-container"
    >
      <!-- Pokemon Image with Background -->
      <div
        class="relative h-48 overflow-hidden bg-center bg-cover rounded-t-2xl"
        style="background-image: url('/src/assets/mask-image-modal.png')"
      >
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          alt="Pokemon image"
          class="relative z-10 object-contain w-full h-full bg-transparent"
        />
        <!-- Close Button -->
        <button
          @click="close"
          class="absolute z-20 flex items-center justify-center w-8 h-8 rounded-full top-[15px] right-[15px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            class="bg-transparent"
          >
            <path
              d="M13 0C5.81855 0 0 5.81855 0 13C0 20.1815 5.81855 26 13 26C20.1815 26 26 20.1815 26 13C26 5.81855 20.1815 0 13 0ZM19.3742 16.4125C19.6206 16.6589 19.6206 17.0573 19.3742 17.3036L17.2984 19.3742C17.052 19.6206 16.6536 19.6206 16.4073 19.3742L13 15.9355L9.5875 19.3742C9.34113 19.6206 8.94274 19.6206 8.69637 19.3742L6.62581 17.2984C6.37944 17.052 6.37944 16.6536 6.62581 16.4073L10.0645 13L6.62581 9.5875C6.37944 9.34113 6.37944 8.94274 6.62581 8.69637L8.70161 6.62056C8.94798 6.37419 9.34637 6.37419 9.59274 6.62056L13 10.0645L16.4125 6.62581C16.6589 6.37944 17.0573 6.37944 17.3036 6.62581L19.3794 8.70161C19.6258 8.94798 19.6258 9.34637 19.3794 9.59274L15.9355 13L19.3742 16.4125Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div class="pokemon-datails px-[30px] py-5 rounded-b-2xl bg-white">
        <!-- Pokemon Name -->
        <h1
          class="bg-white flex justify-start w-full my-2.5 text-base font-bold text-center capitalize text-gray"
        >
          <span class="mr-1 font-bold bg-white">Name:</span>
          <span class="font-medium bg-white">{{ pokemon.name }}</span>
        </h1>
        <hr class="text-lightGray" />

        <!-- Pokémon Weight -->
        <h2
          class="bg-white flex justify-start w-full my-2.5 text-base font-bold text-center capitalize text-gray"
        >
          <span class="mr-1 font-bold bg-white">Weight:</span>
          <span class="font-medium bg-white">{{ pokemon.weight }}</span>
        </h2>
        <hr class="text-lightGray" />
        <!-- Pokémon Height -->
        <h2
          class="bg-white flex justify-start w-full my-2.5 text-base font-bold text-center capitalize text-gray"
        >
          <span class="mr-1 font-bold bg-white">Height: </span>
          <span class="font-medium bg-white">{{ pokemon.height }}</span>
        </h2>
        <hr class="text-lightGray" />
        <!-- Pokemon Types -->
        <h2
          class="bg-white flex justify-start w-full my-2.5 text-base font-bold text-center capitalize text-gray"
        >
          <span class="mr-1 font-bold bg-white">Types:</span>
          <span
            v-for="type in pokemonTypes"
            :key="type"
            class="pr-1 font-medium bg-white"
          >
            {{ type }}
          </span>
        </h2>

        <hr class="text-lightGray" />
        <!-- Buttons Row -->
        <div class="flex justify-between my-5 bg-white">
          <!-- Share Button -->
          <button
            class="button-share px-4 py-2 text-white rounded-[60px] bg-primary w-[155pxpx] text-base primary-buttons"
            @click="sharePokemon"
          >
            Share to my friends
          </button>

          <!-- Favorite Button -->
          <button
            class="relative bg-white right-5"
            @click="addOrRemoveFavorite(pokemon)"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 star-button"
              :class="{
                'text-secondary': isFavorite,
                'text-disabled': !isFavorite,
              }"
            >
              <path
                d="M11.6052 0.904438L8.43178 7.62704L1.33161 8.70855C0.0583408 8.9015 -0.451939 10.5415 0.471424 11.4809L5.60824 16.7107L4.39329 24.0984C4.1746 25.4338 5.52076 26.4341 6.64824 25.8096L13 22.3213L19.3518 25.8096C20.4792 26.429 21.8254 25.4338 21.6067 24.0984L20.3918 16.7107L25.5286 11.4809C26.4519 10.5415 25.9417 8.9015 24.6684 8.70855L17.5682 7.62704L14.3948 0.904438C13.8262 -0.293851 12.1787 -0.309084 11.6052 0.904438Z"
                :fill="isFavorite ? '#FBBF24' : '#BFBFBF'"
              />
            </svg>

            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2"
            >
              <circle cx="22" cy="22" r="22" fill="#F5F5F5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
