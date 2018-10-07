import React from "react";
import data from "./countries.json";
import BorderLinks from "./BorderLinks";

export default class CountryDetails extends React.Component {
  render() {
    let cca3 = this.props.match.params.cca3;
    let countryData = data.filter(e => e.cca3.includes(cca3))[0];
    let name = countryData.name.common;
    let capital = countryData.capital[0];
    let area = countryData.area;
    let borderCountries = countryData.borders;

    return (
      <div className="container list-group" style={{position: "fixed"}}>
        <h1 className="list-group-item">{name}</h1>

        <div className="list-group-item container">
          <div className="row">
            <p className="col-3">Capital</p>
            <p className="col-9">{capital}</p>
          </div>
        </div>

        <div className="list-group-item container">
          <div className="row">
            <p className="col-3">Area</p>
            <p className="col-9">{area} km<sup>2</sup></p>
          </div>
        </div>

        <div className="list-group-item container">
          <div className="row">
            <p className="col-3">Borders</p>
            <ul className="col-9">
                {borderCountries.map(e => <BorderLinks cca3={e} key={e}/>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
