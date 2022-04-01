import axios from "axios";

const BASE_URL = 'http://localhost:300';

export const getMovies = async () => {
    try {
        return await axios.get(`${BASE_URL}/movies`)
    } catch (error) {
        console.error(error);
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
