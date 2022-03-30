<template>
    <section class="movie-card">
        <img :src="movie.poster_url" class="movie-card__img"/>
        <div class="movie-card__wrapper">
            <h3 class="movie-card__header">{{ movie.title }}</h3>
            <div>
                <BaseTag :text="movie.genre.name" theme="tag--red"></BaseTag>
                <BaseTag :text="formatLength(movie.length)"></BaseTag>
            </div>
            <BaseTag :text="'19:00'" theme="tag--red-border"></BaseTag>
        </div>
            
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
        &__img {
            width: 9.8rem;
            height: 13.2rem
        }
    }
</style>
