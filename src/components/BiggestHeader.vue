<template>
    <h1 class="header__big" :class="theme">{{ text }}</h1>
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
.header__big {
    font-size: 8rem;
    font-family: $tertiary-font;
    font-weight: 600;
    line-height: 102%;
}

.header--black {
    color: $text-color;
}

.header--grey {
    color: $placeholder-color;
}
</style>
