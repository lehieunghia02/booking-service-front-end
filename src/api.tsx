import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/auth',
    withCredentials: true,
})

export default api

