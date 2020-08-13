import React from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
  console.log(props);
  // Deconstruir params, que viene de props
  const { params } = props.match;

  let getCountry = (cca3) =>
    countries.find((countryObj) => countryObj.cca3 === cca3);

  const foundCountry = getCountry(params.cca3);

  let bordersDataArr = foundCountry.borders;

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital:</td>
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
                {bordersDataArr
                  .map((borderRef) =>
                    countries.find((country) => borderRef === country.cca3)
                  )
                  .map((border) => {
                    return (
                      <li key={border.cca3}>
                        <Link to={`/countries/${border.cca3}`}>
                          {border.name.common}
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
