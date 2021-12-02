import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  let borders = props.country[0].borders;
  let countries = props.allCountries;

  return (
    <div>
      <h3>{props.country[0].name.official}</h3>
      <div>
        <strong>Capital:</strong>
        {props.country[0].capital}
      </div>
      <div>
        <strong>Area:</strong>
        {props.country[0].area}
      </div>
      <div>
        <strong>Borders:</strong>
        <ul>
          {borders.map((border) => {
            return (
              <li>
                <Link to={`/country/${border}`}>
                  {
                    countries.find((country) => country.cca3 === border).name
                      .official
                  }
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <hr></hr>
    </div>
  );
};

export default CountryDetails;
