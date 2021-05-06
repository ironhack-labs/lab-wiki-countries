import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  // get country id or set initial country
  const countryId = props.countryId || props.countries[0].cca3;

  const getCountry = (countryId) => {
    return props.countries.find((country) => country.cca3 === countryId);
  };
  const country = getCountry(countryId);
  const bordersList = country.borders.map((cca3) => {
    return (
      <li key={cca3}>
        <Link to={`/${cca3}`}>{getCountry(cca3).name.common}</Link>
      </li>
    );
  });

  return (
    <>
      {/* <!-- Country Details (Bootstrap column) --> */}
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital[0]}</td>
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
                <ul>{bordersList}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
