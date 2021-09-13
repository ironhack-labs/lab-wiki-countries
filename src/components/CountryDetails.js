import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import countries from '../countries.json';

const CountryDetails = () => {
  console.log(countries);
  let { cca3 } = useParams();
  let matchingCountry = countries.filter((country) => {
    return country.cca3 == cca3;
  });

  let borderingCountries = matchingCountry[0].borders.map((border) => {
    return countries.filter((country) => {
      return country.cca3 == border;
    })[0];
  });
  console.log(borderingCountries);

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <span className="item-name">Capital</span>
          <span>
            {matchingCountry.length > 0 && matchingCountry[0].capital[0]}
          </span>
        </li>
        <li className="list-group-item"> 
        <span className="item-name">Area</span>
        <span>
          {matchingCountry.length > 0 && matchingCountry[0].area}km<sup>2</sup>
        </span>
        </li>
        <li className="list-group-item">
        <span className="item-name">Borders</span>
        <span className="item-description">
            <ul>
          {borderingCountries.map((country) => {
            return (
              <li key={country.cca3}>
                <Link to={'/country/' + country.cca3}>
                  {country.name.common}
                </Link>
              </li>
            );
          })}
          </ul>
        </span>
        </li>
      </ul>
    </div>
  );
};

export default CountryDetails;
