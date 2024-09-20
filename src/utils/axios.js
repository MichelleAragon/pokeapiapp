import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon";

// Función para obtener los nombres de los primeros 20 pokemones
export const getPokemonByName = async () => {
  try {
    const response = await axios.get(`${baseURL}?limit=20`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return [];
  }
};

// Función para obtener los detalles de un Pokémon específico por su nombre
export const getPokemonDetails = async (name) => {
  if (!name) {
    console.error('No Pokémon name provided');
    return null;
  }

  try {
    const response = await axios.get(`${baseURL}/${name}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${name}:`, error);
    return null;
  }
};