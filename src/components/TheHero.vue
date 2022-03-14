<template>
    <section class="container container__wrapper">
        <div class="hero">
            <div class="hero__wrapper">
                <h1 class="hero__header">Welcome to the best cinema in Monterail</h1>
                   <p class="hero__text">Best movies, best experiences, best people. And all that doesn't exist. Yikes.</p>
                <button class="button">Book a ticket</button>
            </div>    
        </div>
        <img src="@/assets/audience.jpg" alt="Cinema hall with an audience" class="hero__img">
    </section>
</template>

<style lang="scss">

.container__wrapper {
    display: flex;
}

.hero {
    background-color: $background-color;
    padding: 8rem;
    display: flex;

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-right: 10rem;
    }

    &__header {
        font-size: 8rem;
        font-family: $tertiary-font;
        font-weight: 600;
        margin-bottom: 4rem;
        line-height: 102%;
    }

    &__text {
        font-size: 2.2rem;
        font-weight: 400;
        line-height: 3.7rem;
        margin-bottom: 4rem;
    }

    &__img {
        width: 40%;
        height: 90vh;
        object-fit: cover;
    }
}

</style>