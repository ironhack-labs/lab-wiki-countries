import React from 'react';
import { Link } from 'react-router-dom';


const CountryDetail = (props) => {
  const { id } = props.match.params;
  const countries = props.countriesList;
  const getCountryById = (id) => {
    return countries.find(country => country.cca3 === id);
  };

  const selectedCountry = getCountryById(id);

  const getBorders = () => {
    return selectedCountry.borders.map((c, idx) => {
      const borderCountry = getCountryById(c);
      return (
        <li key={idx}>
          <Link to={`/${borderCountry.cca3}`}>{borderCountry.flag} {borderCountry.name.common}</Link>
        </li>
      );
    });
  }

  return (
    <div>
      <h1>{selectedCountry.flag}{selectedCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{selectedCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{selectedCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {getBorders()}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default CountryDetail;
