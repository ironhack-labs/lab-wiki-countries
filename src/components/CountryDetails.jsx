import React from 'react';
import { Link } from 'react-router-dom';

// Import Data Base
import countries from '../countries.json';

const CountryDetails = (props) => {
  console.log(props);

  // * buscamos por id (cca3) el country que coincide con el id (cca3) que recibimos por parámetro
  let getCountry = (cca3) => countries.find((obj) => obj.cca3 === cca3);

  // * desestructuramos params de props.match
  const { params } = props.match;
  console.log(params);

  // * Creamos una variable donde guardamos el resultado de incovar a getCountry con el id (cca3) que sacamos de this.props.match.params.cca3
  const foundCountry = getCountry(params.cca3);

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders &&
                  foundCountry.borders.map((cca3, index) => {
                    return (
                      <li key={cca3}>
                        <Link to={`/${cca3}`}>
                          {getCountry(cca3).name.common}
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

export default CountryDetails;
