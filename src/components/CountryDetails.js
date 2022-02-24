import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const params = useParams();
  const countryId = params.id;
  const country = props.countries.find(
    (country) => country.alpha3Code === countryId
  );

  return (
    <div className="col-7">
      <div>
        <h1>{country.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((border, index) => (
                    <li key={index}>
                      <a href={border}>{border}</a>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
