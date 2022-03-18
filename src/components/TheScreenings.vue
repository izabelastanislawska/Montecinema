<template>
    <section class="container">
        <h1 class="header__big">Screenings:</h1>    
        <h1 class="header__big header--grey"> {{ currentDate }}</h1>
        <!-- <h1 class="header__big header--grey"
            v-for="seances in seancesCard"
            :key="'s' + seances.id"
            :datetime="seances.datetime"
            :movie="seances.movie"
            :hall="seances.hall">
            {{  new Date(seances.datetime).toLocaleDateString("en-GB", {weekday:"long", day:"2-digit", month:"2-digit", year:"numeric"})}}
            </h1> -->
        <div
            v-for="movie in movieCard"
            :key="'m-' + movie.id"
            :title="movie.title"
            :img="movie.poster_url"
            :genre="movie.genre.name"
            :length="movie.length"
            :description="movie.description">
            
            <h2>Title: {{ movie.title }}</h2>
            <p>Genre: {{ movie.genre.name }}</p>
            <p>Movie length: {{ formatLength(movie.length) }}</p>
            <img :src="movie.poster_url" />
        </div>
        
        <!-- <MovieCard v-model="movieCard">
            <h3>Title: {{ title }}</h3>
            <p>Movie length: {{ length }} min.</p>
            <img :src="img" />
            <p>Genre: {{ genre }}</p>
        </MovieCard> -->

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
            MOVIES_URL: 'http://localhost:3000/movies',
            // SEANCES_URL: 'http://localhost:3000/seances',
            movieCard: [],
            // seancesCard: [],
        }
    },
    methods: {
        async getMovies() {
            try {
                const response = await axios.get(this.MOVIES_URL);
                const movies = response.data;
                this.movieCard = movies;
            } catch (error) {
                console.error(error);
            }
        },
    // async getSeances() {
    //     try {
    //         const response = await axios.get(this.SEANCES_URL);
    //         const seances = response.data;
    //         this.seancesCard = seances;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
        formatLength(lengthInMinutes = 0) {
            const hours = Math.floor(lengthInMinutes/60);
            const minutes = `0${lengthInMinutes%60}`.slice(-2);
            return `${hours}:${minutes}`
        },
    },
    computed: {
        currentDate() {
            const currentDate = new Date().toLocaleDateString("en-GB", {weekday:"long", day:"2-digit", month:"2-digit", year:"numeric"});
            return currentDate;
        }
   },
   mounted() {
       this.getMovies();            
    //    this.getSeances();
       
   }
};
</script>
