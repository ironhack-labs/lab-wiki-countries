import axios from "axios";

const httpLocal = axios.create({
  baseURL: "http://localhost:3001",
});

httpLocal.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

export default httpLocal;
