import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
  const { id } = props.match.params;
  const country = countries.find((country) => country.cca3 === id);

  const { name, capital, area, borders } = country;

  return (
    <div className="col-7">
      <h1>{name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>
              {capital.length > 1
                ? capital.map((eachCapital, index) =>
                    index === 0 ? eachCapital : ' - ' + eachCapital
                  )
                : capital}
            </td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km
              <sup>2</sup>
            </td>
          </tr>
          {borders.length > 0 && (
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders.map((countryCca3) => (
                    <li key={countryCca3}>
                      <Link to={`/country/${countryCca3}`}>
                        {
                          countries.find(
                            (country) => country.cca3 === countryCca3
                          ).name.common
                        }
                      </Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
