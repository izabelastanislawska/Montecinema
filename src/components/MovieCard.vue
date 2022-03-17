<template>
    <section>
        <div
            v-for="movie in movieCard"
            :key="movie.id"
            :title="movie.title"
            :img="movie.poster_url"
            :genre="movie.genre.name"
        ></div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        genre: {
            type: String,
            default: ""
        },
        img: {
            type: String,
            default: ""
        },
        length: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            MOVIES_URL: 'http://localhost:3000/movies',
            movieCard: []
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
    },
    mounted() {
       this.getMovies();
    }
}

</script>