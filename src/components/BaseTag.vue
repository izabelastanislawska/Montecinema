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
    padding: 0.8rem 1.6rem;
}

.tag--red {
    background-color: $tag-color;
    color: $tag-text-color;
    border-radius: 25px;
}

.tag--grey {
    background-color: $placeholder-color;
    border-radius: 25px;
    color: $white-color;
}

.tag--red-border {
    border-radius: 25px;
    border: 2px $button-color solid;
    color: $button-color;
    font-family: $primary-font;
    margin: 0;
}
</style>
