import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemonByName = async () => {
    try {
      const response = await axios.get(`${baseURL}?limit=20`);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      return [];
    }
  };

// Llama a la función getPokemonByName para obtener los nombres de los primeros 20 pokemones
getPokemonByName();
