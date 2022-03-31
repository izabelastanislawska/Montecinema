import axios from "axios";

const BASE_URL = 'http://localhost:3000';

export const getMovies = async () => {
    try {
        return await axios.get(`${BASE_URL}/movies`)
    } catch (error) {
        const errorMessage = (error && error.message) || "Something went wrong. Reload your page or try again later."
        this.$notify({
            group: 'error',
            title: 'Unable to load data',
            text: errorMessage,
        }) 
    } 
};

const getScreenings = async () => {
    return await axios.get(`${BASE_URL}/seances`)
};

const getHalls = async () => {
    return await axios.get(`${BASE_URL}/halls`)
};

export default {
    getScreenings,
    getHalls
};
