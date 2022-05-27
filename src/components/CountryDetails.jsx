import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Countries from '../countries.json';

function CountryDetails() {
  const { countryId } = useParams();
  const [allCountries, setAllCountries] = useState();

  const foundCountry = Countries.find((country) => {
    return country.alpha3Code === countryId;
  });

  return (
    <div>
      <div class="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table class="table">
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
                  {foundCountry.borders.map((border) => {
                    return <li> {border}</li>;
                  })}
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

/* style="width: 30%" */
