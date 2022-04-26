import Vue from 'vue'
import Vuex from 'vuex'
import {getMovies} from '@/api/BaseApi'

Vue.use(Vuex)

export interface Movie {
  id: number;
  title: string;
  genre: {
    id: number;
    name: string;
  };
  poster_url: string;
  length: number;
  release_date: string;
  description: string;
}

export default new Vuex.Store({
  state: {
    movies: [] as Array<Movie>,
  },
  getters: {
    movie: (state) => (movieId: number) => {
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
      const movies: Array<Movie> = await getMovies();
        commit("setMovies", movies);
    }
  },
  modules: {
  }
})
