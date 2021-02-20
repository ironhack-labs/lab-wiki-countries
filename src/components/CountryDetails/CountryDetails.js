import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

const CountryDetails = ({ countries, countryId }) => {
  const [country, setCountry] = useState({});

  const getCountry = (countries, countryId) => {
    const selectedCountry = countries.find(
      (country) => country.cca3 === countryId
    );
    setCountry({ ...selectedCountry });
  };

  useEffect(() => getCountry(countries, countryId), [countryId]);

  return (
    <div className="col-7">
      <table className="table">
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
          </tr>
          <tr>
            {countries
              .filter((countryNew) => country.borders.includes(countryNew.cca3))
              .map((border) => {
                return (
                  <Route key={border.cca3}>
                    <Link
                      className="list-group-item list-group-item-action"
                      to={`/${border.cca3}`}
                    >
                      {border.flag} {border.name.official}
                    </Link>
                  </Route>
                );
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
