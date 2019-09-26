import React, { Component } from "react";
import countries from "./../countries";
import { Link } from "react-router-dom";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }
  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;
    const country = countries.find(item => item.cca3 === id);
    return {
      ...state,
      country
    };
  }

  render() {
    const country = this.state.country;

    return (
      (country && (
        <div className="list-group">
          <div className="list-group-item list-group-item-action">
            <h1>{country.name.official} </h1>
          </div>
          <div className="list-group-item list-group-item-action">
            <h4>Capital: {country.capital[0]}</h4>
          </div>
          <div className="list-group-item list-group-item-action">
            <h4>Area: {country.area} km&#178;</h4>
          </div>
          <div className="list-group-item list-group-item-action">
            <h3>Borders: </h3>({country.borders.length} &&(
            {country.borders.map(countryBorder => (
              // countryBorder === country.cca3 && (
              <ul>
                <Link to={`/country/${countryBorder}`}>{countryBorder}</Link>
              </ul>
            ))}{" "}
            ) || (<p>Swim</p>)
          </div>
        </div>
      )) || (
        <div>
          <p>pick country</p>
        </div>
      )
    );
  }
}
