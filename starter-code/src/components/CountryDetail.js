import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from "react-router-dom";

class CountryDetail extends Component {

  country = (id) => {
    return countries.find(element => element.cca3 === id);
  }

  printBorders = (item) => {
    const nameOfCountry = this.country(item);
    return nameOfCountry.name.common;
  }
  
  render() {
    const foundCountry = this.country(this.props.match.params.id);
    return (
      <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{foundCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {foundCountry.borders.map((item, index) => {
                      return <Link key={index} to={`/${item}`}><li>{this.printBorders(item)}</li></Link>
                      }
                    )}
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