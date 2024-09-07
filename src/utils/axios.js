import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    // make your request modifications here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // make your response modifications here
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
