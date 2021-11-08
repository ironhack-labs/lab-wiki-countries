import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function findSingleCountry(countriesArr, singleCca3) {
  return countriesArr.find((el) => el.cca3 === singleCca3);
}

function CountryDetails() {
  const { countryCca3 } = useParams();
  const singleCountry = findSingleCountry(countries, countryCca3);
  return (
    <div className="col-7">
      <h1>{singleCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{singleCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {singleCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {singleCountry.borders.map((country) => {
                  const getCountry = findSingleCountry(countries, country);
                  return (
                    <li key={country}>
                      <Link to={`/${country}`}>{getCountry.name.common}</Link>
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

export default CountryDetails;
