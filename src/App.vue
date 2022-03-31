<template>
    <div>
      <template v-if="error">
        <div class="app-error">
          <h1>Sorry</h1>
          <h2>Something went wrong. Please reload your pagee or try again later</h2>
          <button @click="reloadPage">Reload</button>
        </div>
      </template>
      <template v-else>
        <router-view/>
      </template>
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      error: null
    }
  },
  methods: {
    reloadPage() {
      window.location.reload()
    }
  },
  errorCaptured(error) {
    this.error = error
  }
}

</script>

<style lang="scss" scoped>
  .app-error {
    margin: 0 auto;
    display: inline-block;
    vertical-align: middle;
    h1 {
      font-size: 3.2rem;
    }
    h2 {
      font-size: 2.4rem;
    }
    button {
      font-size: 1.8rem;
    }
  }

</style>
