<template>
    <section>
        <MainHeader/>
        <TheScreenings/>
    </section>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import TheScreenings from '../components/TheScreenings.vue';


export default {
  name: 'App',
  components: {
    MainHeader,
    TheScreenings
  }
}

</script>