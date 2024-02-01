import axios from "axios";

const httpCountries = axios.create({
  baseURL: "https://ih-countries-api.herokuapp.com",
});

httpCountries.interceptors.response.use(
  (response) => response.data, 
  (error) => {
    return Promise.reject(error);
  }
);

export default httpCountries;
