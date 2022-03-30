<template>
    <section class="all-movies__wrapper">
        <BiggestHeader text="All the movies" theme="header--black"/>
        <div class="input-all-movies__wrapper">
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
            
            <MovieCardAllMovies
                v-for="movie in filteredMovies"
                :key='"m" + movie.id'
                :movie="movie">
            </MovieCardAllMovies>
        </section>

    </section>
</template>

<script>
import BiggestHeader from '@/components/BiggestHeader.vue';
import CustomInput from '@/components/CustomInput.vue';
import SelectInput from "@/components/SelectInput.vue";
import MovieCardAllMovies from '@/components/MovieCardAllMovies.vue';

export default {
    components: {
        BiggestHeader,
        CustomInput,
        SelectInput,
        MovieCardAllMovies
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
            let filteredMovie = this.movies.filter(movie => movie.title.toLowerCase().includes(this.search.toLowerCase()));
            const movies = filteredMovie.filter(movie => movie.genre.name.toLowerCase().includes(this.selectedCategory.toLowerCase()));
            return movies;
        },
    },
    async mounted() {
        this.$store.dispatch("fetchMovies");
    }
}
</script>

<style lang="scss" scoped>
    .input-all-movies__wrapper {
        display: flex;
        margin-top: 3rem;
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
    .all-movies__wrapper {
        margin-bottom: 6.4rem;
    }
</style>
