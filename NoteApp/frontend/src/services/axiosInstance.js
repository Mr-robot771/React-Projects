import axios from "axios";

const api = axios.create({
  // import.meta.env.VITE_API_URL ||
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

//request interceptor to add token
api.interceptors.request.use(
  (config) => {
    //get token from localstorage
    const token = localStorage.getItem("token");

    //if token exists, add it headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
