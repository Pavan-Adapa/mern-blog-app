import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // 👈 THIS IS REQUIRED
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
