<template>
    <section class="breadcrumb">
        <slot/>
    </section>
</template>

<script>
export default {
    props: {

    }
}

</script>

<style lang="scss" scoped>
    .breadcrumb {
        background-color: $tag-color;
        padding: 2rem;
        margin-bottom: 4rem;
    }
</style>
