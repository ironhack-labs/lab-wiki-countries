import React, { Component } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  constructor() {
    super();
    this.state = {
      country: ""
    };
  }

  /*componentDidUpdate() {
    let { country } = this.state;

    country = countries.find(
      countrie => countrie.cca3 === this.props.match.params.countrie
    );

    this.setState({ country });
  }*/

  render() {
    let { country } = this.state;
    country = countries.find(
      countrie => countrie.cca3 === this.props.match.params.countrie
    );

    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((countrie, i) => {
                    let name = countries.find(c => c.cca3 === countrie);
                    return (
                      <li key={i}>
                        <Link to={`/${countrie}`}>{name.name.common}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
