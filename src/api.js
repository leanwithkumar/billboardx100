import axios from "axios";

const api = axios.create({
    baseURL: '/api/auth' // now it will pass through the vercel.json rewrite
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);
