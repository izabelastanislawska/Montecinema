<template>
    <section>
        <MainHeader/>
        <BiggestHeader text="All Movies" theme="header--black"></BiggestHeader>
    </section>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import BiggestHeader from '@/components/BiggestHeader.vue';

export default {
    components: {
        MainHeader,
        BiggestHeader
    }
}
</script>
