import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  render() {
    let country = this.props.countries.filter(c => c.cca3 === this.props.id);
    let countryBorders = this.props.countries.filter(b =>
      country[0].countryBorders.includes(b.cca3)
    );

    return (
      <div>
        <h2>{country[0].name.official}</h2>
        <hr />
        <span> Country Capital: </span>
        <span>{country[0].capital}</span>
        <hr />
        <span> Country Area: </span>
        <span>
          {country[0].area}
          Km2
        </span>
        <hr />
        <span> Country Borders: </span>
        <ul className="list-group">
          {countryBorders.map(e => (
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
