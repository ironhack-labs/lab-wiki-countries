import React, { Component } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }

  componentDidMount() {
    countries.filter(value => {
      
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {countries.map(country => {
                return (
                  <div key={country.name.common}>
                    <Link
                      to={`/${country.cca3}`}
                      className="list-group-item list-group-item-action active"
                    >
                      {country.name.common}{" "}
                      <img
                        src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                        alt=""
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-7">
            Props: {this.props.match.params.country} <hr />
            State: {this.state.country && this.state.country.name.common}
          </div>
        </div>
      </div>
    );
  }
}
