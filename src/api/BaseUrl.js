import axios from "axios";

const BASE_URL = 'http://localhost:3000';

export const getMovies = async () => {
    return await axios.get(`${BASE_URL}/movies`)
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
