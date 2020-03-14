import React from "react";
import Countries from "../countries.json";
import { Link, Route } from "react-router-dom";

const CountryDetail = props => {
  // Recibo los parámetros que hay en la URL desde App.js vía el <ROUTE>
  const { countryCode } = props.match.params;
  console.log({ countryCode });

  // Funcion para encontrar el CCA3 según el CountryCode que recibimos
  const handeldCountry = countryCCA => {
    const result = Countries.find(country => country.cca3 === countryCCA);
    return result;
  };

  // LLamamos a la función que hay justo encima.
  const countryToDisplay = handeldCountry(countryCode);

  // Return y nos podemos meter en CountryToDisplah porque hemos guardado todos los datos ahí
  return (
    <div className="col-7">
      <h1>{countryToDisplay.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="capital">Capital</td>
            <td>{countryToDisplay.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryToDisplay.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryToDisplay.borders.map(countryId => {
                  return (
                    <li>
                      <Link to={countryId}>
                        {Countries.map(country => {
                          if (country.cca3 === countryId) {
                            return <p> {country.name.common} </p>;
                          }
                        })}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
