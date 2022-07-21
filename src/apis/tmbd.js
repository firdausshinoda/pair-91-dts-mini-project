import axios from 'axios'

const API_KEY = '41f39357391b7143365bfdf5dfcd8ede'
const BASE_URL = 'https://api.themoviedb.org/3/'

const tmbd = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key:API_KEY,
    },
})

export default tmbd