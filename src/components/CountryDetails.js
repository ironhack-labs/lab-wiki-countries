import React, { useState, useEffect } from 'react';
import CountriesDB from '../countries.json';
import Border from './Border';

function CountryDetails(props) {
  const [countryPage, setCountryPage] = useState({
    name: { common: '' },
    borders: [],
  });

  function Find(initials) {
    let name = CountriesDB.find((elem) => elem.cca3 === initials);

    return name.name.common;
  }

  useEffect(() => {
    CountriesDB.forEach((elem) => {
      if (elem.cca3 === props.match.params.country) {
        setCountryPage(elem);
      }
    });
  }, [props]);

  return (
    <div className="col-7">
      <h1>{countryPage.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{countryPage.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryPage.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryPage.borders.map((elem, i) => (
                  <Border key={i} to={`/${elem}`}>
                    {Find(elem)}
                  </Border>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
