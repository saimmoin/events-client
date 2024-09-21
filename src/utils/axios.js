/** @format */

import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.8:8000",
});
console.log("⚡ ~ import.meta.env.:", import.meta.env);
console.log("⚡ ~ import.meta.env.BACKEND_URL:", import.meta.env.BACKEND_URL);

import useGetData from '../hooks/useGetData';

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
    console.log("response: ", response);
    // make your response modifications here
    return response;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default instance;
