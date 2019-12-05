import React, { Component } from "react";
import countries from "./countries.json";
import { Link } from "react-router-dom";

export default class Detail extends Component {
  state = {
    borders: []
  };
  render() {
    const country = countries[Number(this.props.match.params.i)];
    country.borders.forEach(e => {
      for (let i = 0; i++; i < countries.length) {
        if (e === countries[i].cca3) {
          const pais = { name: countries[i].name.common, idx: i };
          const state = this.state.borders;
          state.push(pais);
          this.setState({ borders: state });
        }
      }
    });
    console.log(this.state.borders);
    return (
      <>
        <h1>{country.name.common}</h1>
        <hr />
        <p>Capital : {country.capital[0]}</p>
        <p>Area: {country.area}</p>
        <ul>
          {country.borders.map(e => (
            <li>
              <Link>
                <p>{e}</p>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
