import axios from "axios";

const api = axios.create({
    baseURL: 'https://bbx100backend-production.up.railway.app/auth'
})

export const googleAuth = (code) =>api.get(`/google?code=${code}`)