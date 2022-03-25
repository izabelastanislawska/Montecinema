<template>
    <section :id="idName" :class="`${idName}`">
        <div>
            <slot name="image" :class="`${idName}-image`"></slot>
        </div>
        <div :class="`${idName}-header`">
            <slot name="header"></slot>
        </div>
        
        <div :class="`${idName}-genre`">
            <slot name="genre"></slot>
        </div>
        <div :class="`${idName}-length`">
            <slot name="length"></slot>
        </div>
        <div :class="`${idName}-screenings`">
            <slot name="screenings"></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: "MovieCard2",
    props: ['idName'],
}
</script>
