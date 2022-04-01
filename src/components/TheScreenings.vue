<template>
    <section class="container">
        <BiggestHeader text="Screenings:" class="header--black"/>
        <BiggestHeader :text="currentDate" class="header--grey"/>
        
        <MovieCardScreenings
            v-for="movie in movies"
            :key='"m" + movie.id'
            :movie="movie">
        </MovieCardScreenings>

    </section>
</template>

<script>
import BiggestHeader from '@/components/BiggestHeader.vue';
import MovieCardScreenings from '@/components/MovieCardScreenings.vue';

export default {
    components: {
        BiggestHeader,
        MovieCardScreenings
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
       try {
           await this.$store.dispatch("fetchMovies");
        } catch (error) {
            const errorMessage = (error && error.message) || "Something went wrong. Reload your page or try again later."
            this.$notify({
                title: error,
                text: errorMessage,
            })  
        }   
    }
};
</script>
