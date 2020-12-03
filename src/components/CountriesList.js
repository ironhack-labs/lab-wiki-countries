import React, { Component } from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';
import './CountriesList.css';
import CountryDetails from "./CountryDetails"

export default class CountriesList extends Component {
  state = {
    countries,
  };
  render() {
    return (
        <div className="scroll-container">
          {this.state.countries.map((el) => {
            return (
              <div key={el.cca3} className="link-container">
                <Link to={`/country/${el.cca3}`}>
                  {el.flag} {el.name.common}
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}
