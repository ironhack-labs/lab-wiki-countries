import React from "react";
// import { myProjects } from "./Projects";
import countries from "./countries.json";
// import queryString from "query-string";

const countriesDetails = props => {
//   console.log('El valor del URL param "id" es: ', props.match.params.id);

  const getCountries = id => countries.find(oneCountries => oneCountries.id === id);
  const foundCountries = getCountries(props.match.params.id);

//   const queryStringObject = queryString.parse(props.location.search);
//   console.log(
//     "El objecto de query strings que retorna la dependenecia Query Strings es ",
//     queryStringObject
  

  return (
    <div>
      {/* <p>
        Los parámetros de URL se guardan en <code>props.match.params.id</code>
      </p>
      <p>
        La ruta está eastablecida como <code>/projects/:id</code>
      </p>
      <p>
        Por ello, el valor del parámetro <em>id</em> es:{" "}
        <code>{props.match.params.id}</code>
      </p>
      <hr></hr>

      <p>
        Los query strings se almacenan en <code>props.location.search</code>
      </p>
      <p>
        La dependencia <b>query-strings</b> lo convierte a un objeto
      </p>
      <p>
        La URL http://localhost:3000/projects/1a?color=red muestra{" "}
        {queryStringObject.color}
      </p>

      <hr></hr> */}
      <h2>
        {foundCountries.name}{" "}
        <span style={{ fontSize: "14px" }}>{foundCountries.capital}</span>
      </h2>
      <hr></hr>
      <h3>{foundCountries.area}</h3>
      <hr></hr>
      <p>{foundCountries.borders}</p>
      <hr></hr>
    </div>
  );
};
export default countriesDetails;
