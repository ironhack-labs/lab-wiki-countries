import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class CountryDetail extends Component {
  render() {
    const totalCountry = this.props.data;

    const country = totalCountry.filter(ele => ele.cca3 === this.props.id);

    const neighborsList = country[0].borders;

    let neighbors = [];
    neighborsList.forEach(element => {
      neighbors.push(
        totalCountry.filter(px => {
          if (px.cca3 === element) {
            console.log("veamos esto ", px.name.official);
            return px.name.official;
          }
        })
      );
    });

    let nei2 = neighbors.map(ele => ele[0]);

    return (
      <div>
        <h2>{country[0].name.official}</h2>
        <h3>Capital: {country[0].capital}</h3>
        <h4>Area: {country[0].area} km^2</h4>
        <hr />
        <ul className="col-8">
          {nei2.map(e => (
            <NavLink to={e.cca3}>
              <li key={e.cca3}>{e.name.common}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    );
  }
}
