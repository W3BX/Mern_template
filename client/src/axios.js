import axios from 'axios';

const instance = new axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    },
})

export default instance;
