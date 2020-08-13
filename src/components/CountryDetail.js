import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetail = (props) => {
  // creo una función para buscar el país por su cca3
  let getCountry = (cca3) => countries.find((obj) => obj.cca3 === cca3);

  // obtengo de props.match.params su contenido
  const { params } = props.match;
  console.log('props.match', props.match);

  // llamo a la función getCountry y le paso el cca3 de props.match.params para encontrar el país del que quiero mostrar sus detalles
  const foundCountry = getCountry(params.cca3);
  console.log('foundCountry', params.cca3);

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
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
                {foundCountry.borders.map((oneBorder, index) => {
                  let countryBorders = countries.find(
                    (el) => el.cca3 === oneBorder
                  );
                  return (
                    <li key={index}>
                      <Link to={countryBorders.cca3}>
                        {countryBorders.name.common}
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
