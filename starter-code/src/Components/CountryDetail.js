import React, { Component } from "react";
import countries from "../countries.json";
import { Link, Switch, Route } from "react-router-dom";

class CountryDetail extends Component {
  render() {
    const myCountry = countries.find(
      myCountry => myCountry.cca3 === this.props.match.params.cca3
    );

    return (
      <div>
        <div className="col-7">
          <h1>{myCountry.name.common}</h1>
          <table className="table">
            <thead />
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{myCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {myCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>borders </td>
                <td>
                  <ul>
                    {myCountry.borders.map(e => {
                      let completCountry = countries.find(myCountry => myCountry.cca3 === e);
                      return (
                        <li>
                          <Link to={e}>{completCountry.name.common}</Link>
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
    );
  }
}

export default CountryDetail;
