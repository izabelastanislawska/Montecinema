<template>
    <section>
        <MainHeader/>
        <h1>You're on screenings page</h1>
    </section>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';

export default {
    components: {
        MainHeader
    },
    metaInfo: {
        title: 'See movie screenings in Montecinema!'
    }
}
</script>
