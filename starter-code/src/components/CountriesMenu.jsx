import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CountriesMenu.css";
import countriesData from "../countries.json";


// Create array of "country link" objects for the menu:

let CountryLinks = countriesData.map((country) => {
  return (
    <div className="CountriesMenu-country-container" >
      <Link to={`/country/${country.cca3}`}>
          <h3>{country.flag.normalize()} {country.name.common}</h3>
      </Link>
    </div>
  );
});


class CountriesMenu extends Component {

  render() {
    return (
      <div className="CountriesMenu">
        <h1>Countries</h1>
        {CountryLinks}
      </div>
    );
  };
};

export default CountriesMenu;
