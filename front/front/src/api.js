import axios from "axios";

const DEFAULT_API = "http://localhost:8000/api";

// Vite exposes env vars via import.meta.env and requires the VITE_ prefix.
const baseURL = import.meta.env.VITE_API_URL || DEFAULT_API;

export const api = axios.create({
  baseURL,
  withCredentials: true, // send cookies if using Laravel session / Sanctum
  headers: {
    Accept: "application/json",
  },
});

export default api;
