import React, { Component } from "react";
import CountryJS from "../Home/countries.json";
import {Link} from 'react-router-dom';
//import axios from 'axios';

class CountryDetail extends Component {
  constructor() {
    super();
    this.state = {
      countries: {}
    };
  }
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    const { id } = this.props.match.params;
    const country = CountryJS.find(country => country.cca3 === id);
    console.log(id, country);
    return (
      <div className="col-7 detail">
        <h1>{country.name.official}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
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
                  {country.borders.map((b, i) => {
                    const c2 = CountryJS.find(p => p.cca3 === b);
                    return (
                      <li key={i}>
                        <Link to={`/CountryDetail/${c2.cca3}`}>
                          {c2.name.common}
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
    );
  }
}

export default CountryDetail;
