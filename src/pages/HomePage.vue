<template>
    <section>
        <MainHeader/>
        <TheHero/>
        <SoonInTheCinema/>
        <TheScreenings/>
        <ContactUs/>
    </section>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TheHero from '@/components/TheHero.vue';
import SoonInTheCinema from '@/components/SoonInTheCinema';
import TheScreenings from '@/components/TheScreenings.vue';
import ContactUs from "@/components/ContactUs.vue";

export default {
  name: 'App',
  metaInfo: {
    title: "Welcome to Montecinema!"
  },
  components: {
    MainHeader,
    TheHero,
    SoonInTheCinema,
    TheScreenings,
    ContactUs
  }
}

</script>
