<template>
    <section>
        <BiggestHeader text="All the movies" theme="header--black"/>
        <div class="input__wrapper">
            <CustomInput
                v-model="search"
                label="search"
                placeholder="What are you looking for?"
                type="search"
                class="input__search"
                >
            </CustomInput>      
            <SelectInput
                v-model="selectedCategory"
                placeholder="All categories"
                label="category"
                :options="categoryOptions">
            </SelectInput>
        </div>
        <section class="movie__wrapper">
            <MovieCard2 idName="movieCard" class="movie-card"
                v-for="movie in filteredMovies"
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

    </section>
</template>

<script>
import BiggestHeader from '@/components/BiggestHeader.vue';
import CustomInput from '@/components/CustomInput.vue';
import SelectInput from "@/components/SelectInput.vue";
import MovieCard2 from '@/components/MovieCard2.vue';
import BaseTag from '@/components/BaseTag.vue';

export default {
    components: {
        BiggestHeader,
        CustomInput,
        SelectInput,
        MovieCard2,
        BaseTag
    },
    data() {
        return {
            search: '',
            selectedCategory: '',
            categoryOptions: [
                { text: 'Action', value: 'action' },
                { text: 'Comedy', value: 'comedy' },
                { text: 'Family', value: 'family' },
                { text: 'Fantasy', value: 'fantasy' },
                { text: 'Romance', value: 'romance' },
                { text: 'Sci-fi', value: 'sci-fi' },
            ]
        }
    },
    computed: {
        movies() {
            return this.$store.state.movies;
        },
        filteredMovies() {
            let filteredMovie = this.movies.filter(movie => movie.title.toLowerCase().includes(this.search.toLowerCase()))
            return filteredMovie.filter(movie => movie.genre.name.toLowerCase().includes(this.selectedCategory.toLowerCase()))
        },
    },
    methods: {
        formatLength(lengthInMinutes = 0) {
            const hours = Math.floor(lengthInMinutes/60);
            const minutes = `0${lengthInMinutes%60}`.slice(-2);
            return `${hours}h ${minutes} min`
        }
    },
    async mounted() {
        this.$store.dispatch("fetchMovies");
    }
}
</script>

<style lang="scss" scoped>
    .input__wrapper {
        display: flex;
    }
    .input__search {
        width: 65%;
        margin-right: 4rem;
    }
    .input__select {
        width: 35%;
    }
    .movie__wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 4rem;
    }
    .movie-card {
        box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08), 0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443), 0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
        border-radius: 8px;
        padding: 4rem;
        margin: 4.8rem 0;
        display: flex;
        flex-direction: column;
        width: 25%;
        justify-content: space-between;
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
        width: 34rem;
        height: 19rem;
        object-fit: cover;
    }
</style>
