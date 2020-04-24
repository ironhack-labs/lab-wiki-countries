import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from "react-router-dom";

class CountryDetail extends Component {
 
  printName = () => {
    return countries.map(item => {
      if ('/' + item.cca3 === this.props.match.url ) {
        return item.name.common;
      } 
    })
  }

  printCapital = () => {
    return countries.map(item => {
      if ('/' + item.cca3 === this.props.match.url ) {
        return item.capital;
      } 
    })
  }

  printArea = () => {
    return countries.map(item => {
      if ('/' + item.cca3 === this.props.match.url ) {
        return item.area;
      } 
    })
  }

  /* <li><a href="/AND">Andorra</a></li> */

  printBorders = () => {
    return countries.map(item => {
      if ('/' + item.cca3 === this.props.match.url ) {
        return item.borders.map(newItem => <li><Link to={`/${newItem}`}>{newItem}</Link></li>);
      } 
    })
  }
  
  render() {
    return (
      <div className="col-7">
            <h1>{this.printName()}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{this.printCapital()}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.printArea()} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {this.printBorders()}
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