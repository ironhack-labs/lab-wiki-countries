import React, { Component } from "react";
import "../App.css";
import countries from "../countries.json";
import { Link, NavLink } from "react-router-dom";
class Detail extends Component {
  showCountry = () => {
    let country = this.props.match.params.detail;

    const border = e => {
      console.log("------------------- ", e);

      return countries
        .filter(singleCountry => {
          return singleCountry.name.common === e.name.common;
        })
        .map(foundCountry => {
          console.log("================= ", foundCountry);
          return foundCountry.borders.map((oneBorder, i) => {
            console.log("the one border >>>>>>>>>>  ", oneBorder);
            return (
              <div>
                <Link key={i} to={`/country/${oneBorder}`}>
                  <li>{oneBorder}</li>
                </Link>
              </div>
            );
          });
        });
    };

    return countries
      .filter(singleCount => {
        return singleCount.cca3 === country;
      })
      .map(singleCount => {
        return (
          <div>
            <h1>{singleCount.name.common}</h1>
            <table className="table">
              <thead />
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{singleCount.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {singleCount.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>{border(singleCount)}</ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      });
  };

  render() {
    return <div className="col-7">{this.showCountry()}</div>;
  }
}

export default Detail;
