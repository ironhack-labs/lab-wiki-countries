import React from "react";
import { Link } from "react-router-dom";

export default class CountryDetail extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.country.name.common} </h1>
        <h4>Capital: {this.props.country.capital} </h4>
        <h4>Area: {this.props.country.area} km2</h4>
        <h4>Borders </h4>
        <ul>
          {this.props.country.borders.map((border, idx) => (
            <li>
              <Link to={"/countries/" + idx}>
                    {this.props.country.borders[idx]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
