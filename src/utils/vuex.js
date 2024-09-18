import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      favorites: []
    };
  },
  mutations: {
    addToFavorites(state, pokemon) {
      state.favorites.push(pokemon);
    }
  }
});

export default store;