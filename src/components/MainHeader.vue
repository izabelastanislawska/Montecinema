<template>
  <header class="header container">
        <router-link to="/"><img src="@/assets/logo.svg" alt="MonteCinema Logo" class="header__logo"/></router-link>
        <div>
          <router-link to="/movies" class="header__button">Movies</router-link>
          <router-link to="/screenings" class="header__button">Screenings</router-link>
          <router-link to="/contact" class="header__button">Contact us</router-link>
        </div>
        <div class="header__menu">
            <router-link to="/register" class="header__link">Register</router-link>
            <router-link to="/login" class="button button--small">Login</router-link>
        </div>
    </header>
</template>


<style lang="scss">
 .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
      &__logo {
        margin: 1rem 0;
    }

      &__link {
        font-size: 1.8rem;
        font-weight: 500;
        color: $button-color;
        margin-right: 4rem;
    }

    &__button {
      font-size: 1.6rem;
      color: $placeholder-color;
      padding: 2.8rem 3rem;

      &:hover {
        color: $text-color;
        border-bottom: 3px $button-color solid;
      }
    }
}
</style>
