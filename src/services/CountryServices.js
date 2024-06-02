import axios from "axios";
const http = axios.create({
  baseURL: "https://ih-countries-api.herokuapp.com",
});

//Creamos un interceptor para que nos devuelva el data directamente
http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getCountries = () => {
  //Esto toma la urlBase que esta en http y le añade lo que pongamos en ''
  //Esta información te la da la API como endPoint
  return http.get("/countries");
};

export const getCountriesDetails = (alpha3Code) => {
  return http.get(`/countries/${alpha3Code}`);
};
