import Vue from 'vue'
import Vuex from 'vuex'
import {getMovies} from '@/api/BaseUrl'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
  },
  getters: {
    movie: (state) => (movieId) => {
      return state.movies.find(movie => movie.id === movieId)
    },
    movies: (state) => state.movies,
  },
  mutations: {
    setMovies(state, payload) {
      state.movies = payload;
    }
  },
  actions: {
    async fetchMovies({commit}) {
      try {
      const {data} = await getMovies();
      commit("setMovies", data);
    } catch (error) {
      const errorMessage = (error && error.message) || "Something went wrong. Reload your page or try again later."
      this.$notify({
          group: 'error',
          title: 'Unable to load data',
          text: errorMessage,
      })      
    }}
  },
  modules: {
  }
})
