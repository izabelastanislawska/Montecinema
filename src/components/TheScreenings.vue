<template>
    <section>
        <h1>Screenings:</h1>    
        <div
        v-for="movie in movieCard"
       :key="movie.id"
       :title="movie.title"
       :img="movie.poster_url"/>

    </section>
</template>

<script>
import axios from "axios";

export default {
   name: "TheScreenings",
   data() {
     return {
       BASE_URL: 'http:/LocalHost:300/movies',
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