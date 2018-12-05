import React, { Component } from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./CountryDetail.css";

export default class CountryDetail extends Component {
  constructor() {
    super();
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://raw.githubusercontent.com/mledoze/countries/master/countries.json`
      )
      .then(res => {
        const countries = res.data;
        this.setState({ ...this.state, countries: countries });
      });
  }

  getCountry = (key, cca3) => {
    return this.state.countries.filter(country => {
      return country[key] === cca3;
    });
  };

  render() {
    let country;
    if (this.props.match.params.id) {
      country = this.getCountry("cca3", this.props.match.params.id);
    } else {
      country = this.state.countries;
    }

    return (
      <div className="col-10">
        {country.map((resp, index) => {
          return (
            <div>
              <h1>{resp.name.common}</h1>
              <p>{resp.capital}</p>
              <p>{resp.area}</p>
              <p>{resp.borders}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
