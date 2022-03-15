<template>
    <section>
        <MainHeader/>
        <TheHero/>
        <SoonInTheCinema/>
        <TheScreenings/>
        
    </section>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TheHero from '@/components/TheHero.vue';
import SoonInTheCinema from '@/components/SoonInTheCinema';
import TheScreenings from '@/components/TheScreenings.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    TheHero,
    SoonInTheCinema,
    TheScreenings
  }
}

</script>