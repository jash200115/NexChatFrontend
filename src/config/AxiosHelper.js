import axios from "axios";

/**
 * Use Vite's build-time env var VITE_API_BASE_URL (set on Render).
 * Fallback to localhost for local development.
 */
export const baseURL = "http://152.70.76.249:8081";

export const httpClient = axios.create({
  baseURL: baseURL,
});
