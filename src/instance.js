import axios from 'axios';

export default axios.create({
    baseURL: 'https://mypizza-1d7d3.firebaseio.com/'
})

