import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { id } = useParams();
  const [country, setCountry] = useState('');

  useEffect(() => {
    const countryFound = countries.find((country) => country.alpha3Code === id);
    setCountry(countryFound);
  }, [id]);

  if (country) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center p-4">
        <img
          width={72}
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt=""
        />
        <h1>{country.name.common}</h1>
        <table class="table">
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                <b>{country.area}</b> km²
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {country.borders.map((border) => (
                  <Link to={`/${border}`} className="text-primary">
                    {border ? border : null}
                    <br />
                  </Link>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return <p>No country</p>;
  }
}

export default CountryDetails;
