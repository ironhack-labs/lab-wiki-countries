import React from 'react';
import { Link, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import './CountriesList.css';
const CountriesList = ({ countries }) => {
  return (
    <div className="CountriesList__main">
      <ul countries="CountriesList__main--left" className="list-group">
        {countries.map((country) => {
          return (
            <li className="list-group-item" key={country.cca3}>
              <Link to={`/country-detail/${country.cca3}`}>
                {country.flag} {country.name.official}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="CountriesList__main--right">
        <Route
          exact
          path="/country-detail/:id"
          component={CountryDetails}
        ></Route>
      </div>
    </div>
  );
};
export default CountriesList;
