import axios from "axios";

const api = axios.create({
    baseURL: 'https://bbx100-backend.onrender.com/auth'
})

export const googleAuth = (code) => api.get(`/google?code=${code}`)
