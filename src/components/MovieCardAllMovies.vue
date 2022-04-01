<template>
    <section class="movie-card">
        <h3 class="movie-card__header">{{ movie.title }}</h3>
        <BaseTag :text="formatLength(movie.length)"></BaseTag>
        <img :src="movie.poster_url" class="movie-card__img"/>
        <BaseTag :text="movie.genre.name" theme="tag--red"></BaseTag> 
        
    </section>
</template>

<script>
import BaseTag from "@/components/BaseTag.vue";

export default {
    components: {
            BaseTag
        },
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    methods: {
        formatLength(lengthInMinutes = 0) {
            const hours = Math.floor(lengthInMinutes/60);
            const minutes = `0${lengthInMinutes%60}`.slice(-2);
            return `${hours}h ${minutes} min`
        }
    }
}

</script>

<style lang="scss" scoped>
    
    .movie-card {
        box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08), 0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443), 0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
        border-radius: 8px;
        padding: 4rem;
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        width: 25%;
        justify-content: space-between;
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
