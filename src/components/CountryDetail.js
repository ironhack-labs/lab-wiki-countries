import React, { useState, useEffect } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = ({
  match: {
    params: { countryId },
  },
  history,
}) => {
  const [country, setcountry] = useState(countries[0]);
  console.log(country);

  useEffect(() => {
    if (countryId !== '') {
      const newCountry = countries.find((el) => el.cca3 === countryId);
      setcountry(newCountry);
    }
  }, [country, countryId]);

  return (
    <>
      <div class="col-7">
        <h1>{country.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
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
                  {country.borders.map((el) => (
                    <li>
                      <Link to={el}>{el}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CountryDetail;
