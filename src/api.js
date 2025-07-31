import axios from "axios";

const api = axios.create({
  baseURL: 'https://bbx100-backend.onrender.com/auth'
});

// Send code as query string
export const googleAuth = (code) => api.get(`/google?code=${code}`);
