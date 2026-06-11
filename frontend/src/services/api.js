import axios from "axios";

const api = axios.create({
  baseURL: "backend:https://mern-blog-app-vmwq.onrender.com",
  withCredentials: true, // 👈 THIS IS REQUIRED
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
