<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  addOrRemoveFavorite: {
    type: Function,
    required: true,
  },
  openModal: {
    type: Function,
    required: true,
  },
});

</script>

<template>
  <p @click="() => openModal(pokemon)" class="w-full bg-white cursor-pointer">{{ pokemon.name }}</p>
  <button class="relative bg-white right-8" @click="addOrRemoveFavorite(pokemon)">
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute z-[11] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 star-button"
      :class="{ 'text-secondary': isFavorite, 'text-disabled': !isFavorite}"
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
</template>
