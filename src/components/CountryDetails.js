import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetails = (props) => {
  const { cca3 } = props.match.params;
  const findCountry = countries.find((country) => country.cca3 === cca3);

  const displayBorders = () => {
    return findCountry.borders.map((border, id) => {
      const borderName = countries.find((el) => border === el.cca3);
      return (
        <Link to={`/countrydetails/${border}`} key={id}>
          <li>{borderName.name.common}</li>
        </Link>
      );
    });
  };

  return (
    <div className="col-7">
      <h1>{findCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{findCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {findCountry.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{displayBorders()}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
