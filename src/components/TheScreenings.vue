<template>
    <section class="container">
        <BiggestHeader text="Screenings:" class="header--black"/>
        <BiggestHeader :text="currentDate" class="header--grey"/>
        
        <MovieCard
            v-for="movie in movies"
            :key='"m" + movie.id'
            :movie="movie">
        </MovieCard>

    </section>
</template>

<script>
import BiggestHeader from '@/components/BiggestHeader.vue';
import MovieCard from '@/components/MovieCard.vue';

export default {
    components: {
        BiggestHeader,
        MovieCard
    },
    computed: {
        movies() {
            return this.$store.state.movies;
        },
        currentDate() {
            const currentDate = new Date().toLocaleDateString("en-GB", {weekday:"long", day:"2-digit", month:"2-digit", year:"numeric"});
            return currentDate;
        }
   },
   async mounted() {
            this.$store.dispatch("fetchMovies");
        }
};
</script>
