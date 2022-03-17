<template>
    <section class="container">
        <div class="movies">
            <div class="movies__wrapper">
                <div class="movies__wrapper-text">
                    <p class="movies__text">Soon</p>
                    <p class="movies__text">In the cinema</p>
                    </div>
                    <router-link to="/movies" class="movies__text movies__text--red">See All</router-link>
                </div>
                <div class="article__wrapper">

                    <article class="article">
                        <h3 class="article__header">Predator</h3>
                        <BaseTag text="1h 30min"></BaseTag>
                        <img src="@/assets/predator.png" alt="Predator" class="article__img">
                        <BaseTag text="Action" theme="tag--red"/>
                    </article>

                    <article class="article">
                        <h3 class="article__header">Commando</h3>
                        <BaseTag text="1h 30min"></BaseTag>
                        <img src="@/assets/commando.png" alt="Predator" class="article__img">
                        <BaseTag text="Action" theme="tag--red"/>
                    </article>

                    <article class="article">
                        <h3 class="article__header">Terminator 2</h3>
                        <BaseTag text="1h 30min"></BaseTag>
                        <img src="@/assets/terminator.png" alt="Predator" class="article__img">
                        <BaseTag text="Action" theme="tag--red"/>
                        
                    </article>

                </div>
            </div>
        </section>
</template>

<script>
    import BaseTag from "@/components/BaseTag.vue";

    export default {
        components: {
            BaseTag
        }
    }
</script>

<style lang="scss" scoped>
.movies {
    margin: 4rem 0 5rem 0;
}

.movies__wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.movies__wrapper-text {
    display: flex;
}

.movies__text {
    font-size: 2.2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 1rem;
}

.movies__text--red {
    color: $button-color;
}

.article {
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08), 0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443), 0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
    padding: 3rem;
    font-family: &secondary-font;
    margin-bottom: 3rem;
    border-radius: 8px;
    width: 33.33%;
}

.article__wrapper {
        display: flex;
        gap: 5rem;
    }

.article__header {
    font-size: 3.6rem;
    font-weight: 700;
    margin-bottom: 1rem; 
}

.article__text {
    font-size: 1.8rem;
    line-height: 170%;
    padding-top: 1rem;
}
.article__img {
    width: 100%;
    height: 191px;
    object-fit: cover;
}
</style>