import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesDetails = props => {
  let theCountry = countries.find(country => {
    return country.cca3 === props.match.params.id;
  });
  let theBorders = theCountry.borders.map((border, index) => {
    return (
      <li key={index}>
        <Link to={`/${border}`} key={border}>
          {' '}
          {border}{' '}
        </Link>
      </li>
    );
  });

  return (
    <div className="col-7">
      <h1>{theCountry.name.common}</h1>
      <table class="table">
        <thead />
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{theCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {theCountry.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{theBorders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountriesDetails;
