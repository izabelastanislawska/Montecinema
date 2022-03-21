<template>
    <section>
            <h3>Title: {{ movie.title }}</h3>
            <p>Movie length: {{ movie.length }} min.</p>
            <img :src="movie.poster_url" />
            <p>Genre: {{ movie.genre.name }}</p>
    </section>
</template>

<script>

export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
}

</script>
