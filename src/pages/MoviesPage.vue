<template>
    <section class="container">
        <MainHeader/>
        <TheBreadcrumb/>
        <AllMovies/>
    </section>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TheBreadcrumb from '@/components/TheBreadcrumb.vue';
import AllMovies from '@/components/AllMovies.vue';

export default {
    components: {
        MainHeader,
        TheBreadcrumb,
        AllMovies
    }
}
</script>
