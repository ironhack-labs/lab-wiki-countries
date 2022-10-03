import axios from "axios";
// de esta manera buscamos todos los paises 0 cuando apretas en el id
// si utilizamos esta sintaxis en los parametros, estamos diciendo que por defecto 
//SI NO le pasamos un valor toma por defecto string vacio
export const fetchCountries = (alpha3code = '') =>
axios
.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3code}`)
.then((res) => res.data); // asi ya devuelve toda la data



