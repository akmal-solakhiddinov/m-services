import axios from "axios";
import Cookies from "js-cookie";

const $axios = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v-1/`,
  //    baseURL: `${import.meta.env.VITE_BASE_URL}/api/`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

$axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: any) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const { data } = await $axios.get("/auth/refresh");
        localStorage.setItem("accessToken", data.accessToken);

        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        return $axios(originalRequest);
      } catch (refreshError) {
        console.log("Not authorized: Refresh token failed");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default $axios;
