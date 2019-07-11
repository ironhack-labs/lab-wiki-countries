import React, { Component } from "react";
import data from "../countries.json";
import { Link } from "react-router-dom";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borders: this.props.country.borders
        .map(border => data.filter(country => country.cca3 === border))
        .map(b => b[0])
    };
  }

  render() {
    return (
      <div className="country-container">
        <h1>{this.props.country.name.common}</h1>
        <div className="row">
          <div className="column">
            <div className="col-5">Capital</div>
            <div className="col-7">{this.props.country.capital}</div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="col-5">Area</div>
            <div className="col-7">{this.props.country.area} km</div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div class="col-5">Borders</div>
            <div class="col-7">
              <ul>
                {this.state.borders.map((border, key) => (
                  <li className="border-box">
                    <Link
                      key={key}
                      to={`/${border.cca3}`}
                      className="list-group-item list-group-item-action"
                    >
                      {border.name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
