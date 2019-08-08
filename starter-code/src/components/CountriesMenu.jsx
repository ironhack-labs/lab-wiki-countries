import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CountriesMenu.css";
import countriesData from "../countries.json";


// Create array of "country link" objects for the menu:

let CountryLinks = countriesData.map((country) => {
  return (
    <Link to={`/country/${country.cca3}`}>
      <a className="list-group-item list-group-item-action">
        {country.flag.normalize()} {country.name.common}
      </a>
    </Link>
  );
});


class CountriesMenu extends Component {

  render() {
    return (
      <div className="col-5">
        <div className="list-group">
          {CountryLinks}
        </div>
      </div>
    );
  };
};

export default CountriesMenu;