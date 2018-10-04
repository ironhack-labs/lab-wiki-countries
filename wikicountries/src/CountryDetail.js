import React, { Component } from "react";
import countries from "./countries.json";
import { Route, Link } from "react-router-dom";

class CountryDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let country = this.props.data.filter(c => c.cca3 === this.props.id);
    console.log(country);
    let borders = this.props.data.filter(b =>
      country[0].borders.includes(b.cca3)
    );
    console.log(borders);

    return (
      <div>
        <h2>{country[0].name.official}</h2>
        <hr />
        <span>Capital </span>
        <span>{country[0].capital}</span>
        <hr />
        <span>Area </span>
        <span>{country[0].area} Km2</span>
        <hr />
        <span>Borders </span>
        <ul className="list-group">
          {borders.map(e => (
            <li>
              <Link
                to={"/" + e.cca3}
                className="list-group-item list-group-item-action"
                key={e.cca3}
              >
                {e.name.official}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CountryDetail;
