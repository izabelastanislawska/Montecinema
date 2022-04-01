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
      const {data} = await getMovies();
        commit("setMovies", data);
    }
  },
  modules: {
  }
})
