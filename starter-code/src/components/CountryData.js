import React, { Component } from "react";

import Data from "../countries.json";

class CountryData extends Component {
  loadData() {}

  render() {
    this.loadData();
    return (
      <div>
        <div className="col-7">
          {Data.filter(
            (dat) => dat.cca3 === this.props.match.params.country
          ).map(function(item, i) {
            return <h1 key={i}> {item.name.common} </h1>;
          })}
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td className="capital">Capital</td>
                {Data.filter(
                  (dat) => dat.cca3 === this.props.match.params.country
                ).map(function(item, i) {
                  return <td key={i}> {item.capital} </td>;
                })}
              </tr>
              <tr>
                <td>Area</td>
                {Data.filter(
                  (dat) => dat.cca3 === this.props.match.params.country
                ).map(function(item, i) {
                  return (
                    <td key={i}>
                      {item.area}
                      <sup>2</sup>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {Data.filter(
                      (dat) => dat.cca3 === this.props.match.params.country
                    ).map(function(item, i) {
                      return item.borders.map(function(bor, i) {
                        return Data.filter((filterBorder) => filterBorder.cca3 === bor).map(function(borders, index){
                          return(<li key={index}><a href={`/${borders.cca3}`}> {borders.name.common} </a></li>)
                        })
                      });
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

export default CountryData;
