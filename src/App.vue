<template>
  <div>
    <MainHeader/>
    <TheScreenings/>
    <router-view/>
    
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import TheScreenings from './components/TheScreenings';


export default {
  name: 'App',
  components: {
    MainHeader,
    TheScreenings
  }
}

</script>

<style lang="scss">
</style>
