// Your only Route that will show a component that will receive the country code (cca3) in the URL. That is going to represent the id of the country (example: /ESP for Spain, /FRA for France).
import React, { Component } from "react";
import ListOfCountries from "./../components/ListOfCountries";
// import { loadCountry } from './../services/countries';
import countryData from "./../countries";
import { Link } from "react-router-dom";

export class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      area: "",
      borders: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    const countryCode = this.props.match.params.country;
    console.log(countryCode);
    countryData.map(country => {
      if (country.cca3 === countryCode) {
        this.setState({
          name: country.name.common,
          capital: country.capital,
          area: country.area,
          borders: country.borders
        });
      }
    });
  }

  // ??? understand why this is needed
  componentDidMount() {
    this.fetchData();
  }

  // for borders: covert the abbreviation into country name
  convertToCountry(abrv) {
    const country = countryData.find(country => country.cca3 === abrv);
    if (!country) return;
    return country.name.common;
  }

  // ??? understand why this is needed
  componentDidUpdate(prevProp, prevState, snapshot) {
    const prevParam = prevProp.match.params.country;
    const actParam = this.props.match.params.country;
    if (actParam !== prevParam) {
      this.fetchData();
    }
  }
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div
              class="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <ListOfCountries />
            </div>
            <div class="col-7">
              <h1>{this.state.name}</h1>
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>Capital</td>
                    <td>{this.state.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {this.state.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {this.state.borders.map(country => {
                          return (
                            <li key={country}>
                              <Link to={`/${country}`}>
                                {this.convertToCountry(country)}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
