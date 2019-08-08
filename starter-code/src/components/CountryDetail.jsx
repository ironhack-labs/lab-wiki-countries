import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import "./CountryDetail.css";
import countriesData from "../countries.json";


class CountryDetail extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    let countryObj = countriesData.find((country) => {
      return country.cca3 === this.props.match.params.cca3;
    })

    return (
      <div className="CountryDetail">

        <h2>{countryObj.name.common}</h2>

        <h3>Capital: {countryObj.capital}</h3>

        <h3>Area: {countryObj.area}</h3>

        <h3>Borders:</h3>

        <ul>
          {countryObj.borders.map((element, index) => {
            return (
              <li key={index}><Link to={'/country/' + element}>{element}</Link></li>
            )
          })}
        </ul>

        <Link to='/'><Button>Home</Button></Link>

        

      </div>
    );
  }
}

export default CountryDetail;
