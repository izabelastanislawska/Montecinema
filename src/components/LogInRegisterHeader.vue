<template>
    <header class="container login-register__header">
        <router-link to="/"><img src="@/assets/logo.svg" alt="MonteCinema Logo" class="header__logo"/></router-link>
        <p class="login-register__motto">Developed with <span class="login-register__heart">♥</span> by Monterail</p>
    </header>
</template>

<style lang="scss">
.login-register {
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
    }
    &__logo {
        margin: 1rem 0;
    }
    &__motto {
        font-size: 1.6rem;
        text-transform: uppercase;
    }
    &__heart {
        color: $button-color;
    }
}
</style>