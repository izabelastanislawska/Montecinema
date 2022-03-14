<template>
    <section>
        <h1>Screenings:</h1>    
        <div
            v-for="movie in movieCard"
            :key="movie.id"
            :title="movie.title"
            :img="movie.poster_url"
            :genre="movie.genre.name">
            
            <h2>Title: {{ movie.title }}</h2>
            <p>Genre: {{ movie.genre.name }}</p>
            <p>Movie length: {{ movie.length }} min.</p>
            <img :src="movie.poster_url" />
            
        </div>
        <!-- <MovieCard
            v-for:"movie in moviesCard"
            :key="movie.id"
            :title="movie.title"
            :img="movie.poster_url"
            :genre="movie.genre.name"
        /> -->

    </section>
</template>

<script>
import axios from "axios";
// import MovieCard from "@/components/MovieCard.vue";

export default {
    name: "TheScreenings",
    components: {
        // MovieCard
    },
   
   props: {
    title: {
        type: String,
        default: "movie",
    },
    length: {
        type: String,
        default: "movie length",
    },
    img: {
        type: String,
        default: "",
    },
    genre: {
        type: String,
        default: "",
    }
  },
   data() {
     return {
        BASE_URL: 'http://localhost:3000/movies',
        movieCard: [],
     }
   },
   methods: {
    async getMovies() {
        try {
            const response = await axios.get(this.BASE_URL);
            const movies = response.data;
            this.movieCard = movies;
        } catch (error) {
            console.error(error);
        }
    }
   },
   mounted() {
       this.getMovies();
   }
};
</script>