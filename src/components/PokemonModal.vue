<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  },
  isFavorite: {
    type: Boolean,
    required: true
  },
  show: {
    type: Boolean,
    required: true
  },
  close: {
    type: Function,
    required: true
  },
  toggleFavorite: {
    type: Function,
    required: true
  }
});
</script>
<template>
  <!-- Modal Background -->
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <!-- Modal Content -->
    <div class="bg-white rounded-lg mx-auto px-[30px] md:px-0 md:max-w-[570px] shadow-lg p-8 relative">
      <!-- Close Button -->
      <button @click="close" class="absolute text-xl font-bold top-2 right-2">&times;</button>
      
      <!-- Pokemon Image -->
      <img  alt="Pokemon Image" class="object-contain w-full h-48 mb-4" />
      
      <!-- Pokemon Name -->
      <!-- <h2 class="w-full mb-4 text-3xl font-bold text-center">{{ pokemon.name }}</h2> -->
      
      <!-- Pokemon Types -->
      <!-- <p class="w-full mb-4 text-center">
        <span v-for="type in pokemon.types" :key="type" class="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          {{ type }}
        </span>
      </p> -->
      
      <!-- Buttons Row -->
      <div class="flex justify-between">
        <!-- Share Button -->
        <button class="px-4 py-2 text-white bg-blue-500 rounded-md">Share to my friends</button>
        
        <!-- Favorite Button -->
        <!-- <button @click="toggleFavorite(pokemon)">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="star-button"
            :class="{ 'text-secondary': isFavorite, 'text-disabled': !isFavorite}"
          >
            <path
              d="M11.6052 0.904438L8.43178 7.62704L1.33161 8.70855C0.0583408 8.9015 -0.451939 10.5415 0.471424 11.4809L5.60824 16.7107L4.39329 24.0984C4.1746 25.4338 5.52076 26.4341 6.64824 25.8096L13 22.3213L19.3518 25.8096C20.4792 26.429 21.8254 25.4338 21.6067 24.0984L20.3918 16.7107L25.5286 11.4809C26.4519 10.5415 25.9417 8.9015 24.6684 8.70855L17.5682 7.62704L14.3948 0.904438C13.8262 -0.293851 12.1787 -0.309084 11.6052 0.904438Z"
              :fill="isFavorite ? '#FBBF24' : '#BFBFBF'"
            />
          </svg>
        </button> -->
      </div>
    </div>
  </div>
</template>
