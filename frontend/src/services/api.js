import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-blog-app-vmwq.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
