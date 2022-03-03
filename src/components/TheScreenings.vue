<template>
    <section>
        <h1>Screenings:</h1>    
        <div
        v-for="movie in movieCard"
       :key="movie.id"
       :title="movie.title"
       :img="movie.poster_url"/>

    </section>
</template>

<script>
import axios from "axios";

export default {
   name: "TheScreenings",
   data() {
     return {
       BASE_URL: 'http:/LocalHost:300/movies',
    //    savedDataResponse: {},
    //    model: {
    //        movieTitle: '',
    //        movieGenre: '',
    //        moviePoster: '',
    //        movieLength: ''
    //    }
    movieCard: [],
     }
   },
//    created() {
//        console.log("CREATED")
//    },
//    mounted() {
//        console.log("MOUNTED")
//        this.getData()
//        this.fetchData()
//    },
   methods: {
    //    async getData() {
    //        console.log(await axios.get(this.BASE_URL));
    //    },
    //    async getDataWithProps() {
    //        const searchParams = new URLSearchParams("movieTitle=Harry Potter and the Philosopher's Stone")
    //        console.log(await axios.get('${this.BASE_URL}?${searchParams.toString()}'));
    //    },
    //    fetchData() {
    //        fetch(this.BASE_URL).then(resp => {
    //            return resp.json()
    //        }).then(data => {
    //            console.log(data)
    //        }).catch(error => {
    //            console.error(error)
    //        })
    //     },
    // async sendData() {
    //    try {
    //        const savedData = await axios.post(this.BASE_URL, this.model)
    //        this.savedDataResponse = savedData
    //    } catch (err) {
    //        console.log(err)
    //    } finally {
    //        this.model = {
    //         movieTitle: '',
    //         movieGenre: '',
    //         moviePoster: '',
    //         movieLength: ''
    //        }
    //    }
    // }
    async getMovies() {
        try {
            const response = await axios.get(this.BASE_URL);
            const movies = response.data;
            this.movieCard = movies;
        } catch (error) {
            console.error(error);
        }
    }
   },
   mounted() {
       this.getMovies();
   }
};
</script>