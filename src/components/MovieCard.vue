<template>
    <section>
        <div>
            <h3>Title: {{ title }}</h3>
            <p>Movie length: {{ length }} min.</p>
            <img :src="img" />
            <p>Genre: {{ genre }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "MovieCard",
    props: {
        title: {
            type: String,
            default: ""
        },
        genre: {
            type: String,
            default: ""
        },
        img: {
            type: String,
            default: ""
        },
        length: {
            type: String,
            default: ""
        }
    }
}
</script>