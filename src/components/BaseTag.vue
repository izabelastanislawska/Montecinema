<template>
    <p class="tag" :class="theme">{{ text }}</p>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: ''
            },
            theme: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
.tag {
    font-family: $secondary-font;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 2rem 0;
    color: $placeholder-color;
    display: inline-block;   
}
</style>