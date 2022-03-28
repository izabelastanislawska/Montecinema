<template>
    <section class="container">
        <BiggestHeader text="Screenings:" class="header--black"/>
        <BiggestHeader :text="currentDate" class="header--grey"/>
        <!-- <h1 class="header__big header--grey"
            v-for="seances in seancesCard"
            :key="'s' + seances.id"
            :datetime="seances.datetime"
            :movie="seances.movie"
            :hall="seances.hall">
            {{  new Date(seances.datetime).toLocaleDateString("en-GB", {weekday:"long", day:"2-digit", month:"2-digit", year:"numeric"})}}
            </h1> -->

        <MovieCard2 idName="movieCard" class="movie-card"
            v-for="movie in movieCard"
            :key='"m" + movie.id'
            :movie="movie">

            <template v-slot:image>
                <img :src="movie.poster_url" class="movie-card__img">
            </template>

            <template v-slot:header >
                <h1 class="movie-card__header"> {{movie.title}}</h1>
            </template>
           
            <template v-slot:genre>
                <BaseTag :text="movie.genre.name" theme="tag--red"></BaseTag>
            </template>

            <template v-slot:length>
                <BaseTag :text="formatLength(movie.length)"></BaseTag>
            </template>
         
        </MovieCard2>
    </section>
</template>

<script>
import axios from "axios";
import BiggestHeader from '@/components/BiggestHeader.vue';
import MovieCard2 from '@/components/MovieCard2.vue';
import BaseTag from '@/components/BaseTag.vue';

export default {
    components: {
        BiggestHeader,
        MovieCard2,
        BaseTag
    },
    data() {
        return {
            MOVIES_URL: 'http://localhost:3000/movies',
            movieCard: [],
    //         // seancesCard: [],
    //         // SEANCES_URL: 'http://localhost:3000/seances',
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
        formatLength(lengthInMinutes = 0) {
            const hours = Math.floor(lengthInMinutes/60);
            const minutes = `0${lengthInMinutes%60}`.slice(-2);
            return `${hours}h ${minutes} min`
        }
    // async getSeances() {
    //     try {
    //         const response = await axios.get(this.SEANCES_URL);
    //         const seances = response.data;
    //         this.seancesCard = seances;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
        
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

<style lang="scss">
    .movie-card {
        box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08), 0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443), 0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
        border-radius: 8px;
        padding: 4rem;
        margin: 4.8rem 0;
        display: flex;
        &__wrapper {
            margin-left: 4rem;
        }
        &__header {
            font-family: $secondary-font;
            font-weight: 700;
            font-size: 2.4rem;
        }
    }

    .movie-card__img {
        width: 9.8rem;
        height: 13.2rem
    }
</style>
