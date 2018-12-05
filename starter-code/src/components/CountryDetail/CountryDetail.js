import React, { Component } from "react";
import { Link } from "react-router-dom";

import countries from "../../countries.json";

export default class CountryDetail extends Component {
  state = {
    country: {}
  };

  getCountry = countryCca3 => countries.filter(e => e.cca3 === countryCca3)[0];

  setCountry = country => this.setState({ ...this.state, country: { ...country } });

  componentWillMount() {
    this.setCountry(this.getCountry(this.props.match.params.id));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      this.setCountry(this.getCountry(this.props.match.params.id));
    }
  }

  render() {
    return (
      <div className="col-7">
        <h1>{this.state.country.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{this.state.country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.state.country.area} km
                <sup>2 </sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.state.country.borders.map((elem, i) => (
                    <li key={i}>
                      <Link to={elem}>
                        {this.getCountry(elem).name.common}
                      </Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
