import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CountryDetail.css";
import countriesData from "../countries.json";


class CountryDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countryCode: props.match.params.id
    }
  };

  countryObj = countriesData.find((country) => {
    return country.cca3 === this.props.match.params.cca3;
  })
  

  render() {
    return (
      <div className="CountryDetail">

        <h2>{this.countryObj.name.common}</h2>

        <h3>Capital: {this.countryObj.capital}</h3>

        <h3>Borders: {this.countryObj.borders}</h3>


        <Link to='/'>Back</Link>

      </div>
    );
  }
}

export default CountryDetail;
