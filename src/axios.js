import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === "undefined") {
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === BASE_URL + "token/refresh/"
    ) {
      window.location.href = "/accounts/sign-in/";
      return Promise.reject(error);
    }

    if (error.response.status === 401) return Promise.reject(error);
  }
);
