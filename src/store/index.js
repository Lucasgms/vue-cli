import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartMovies: [],
  },
  mutations: {
    addToCart(state, movie) {
      state.cartMovies.push(movie);
    },
    removeToCart(state, movie) {
      const index = state.cartMovies.indexOf(movie);

      if (index !== -1) {
        state.cartMovies.splice(index, 1);
      }
    },
  },
  actions: {

  },
});
