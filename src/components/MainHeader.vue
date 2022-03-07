<template>
  <header class="header container">
        <img src="../assets/logo.svg" alt="MonteCinema Logo" class="header__logo">
        <div>
          <a href="#">Movies</a>
          <a href="#">Screenings</a>
          <a href="#">Contact us</a>
        </div>
        <div class="header__menu">
            <router-link to="/register" class="header__link">Register</router-link>
            <router-link to="/login" class="button button--small">Login</router-link>
        </div>
        <!-- <div>
    <h1>I'm header. Choose your path:</h1>
    <ul>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
  </div> -->
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
        font-size: 1.6rem;
        font-weight: 500;
        color: $button-color;
        margin-right: 4rem;
    }
}
</style>
