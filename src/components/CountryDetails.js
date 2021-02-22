import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
  let { country } = useParams();
  const findCountry = props.countries.find((u) => u.cca3 === country);
  return (
    <div className="col-7" key={findCountry.cca3}>
      <h1 style={{ textAlign: 'left' }}>{findCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>{findCountry.capital}</td>
            <td>{findCountry.name.official}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {findCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {findCountry.borders.map((b, k) => {
                  return (
                    <li key={k}>
                      <Link to={findCountry.cca3}>{b}</Link>
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
}

// useParams, te da información relacionada al routing
//const params = useParams();
//randeriazar en una ruta especifica -> se hace una ruta, se exporta el componente, en route ponerle el path un parametro dinamico
export default CountryDetails;
