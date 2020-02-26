import React from "react";
import { Link } from "react-router-dom";

export default class CountryDetail extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{this.props.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.props.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                {this.props.borders.map((border,idx) => {
                    let borderCountryName = this.props.countries.find(country=> country.cca3 === border).name.common
                    return (
                    <li>
                        <Link to={"/" + border} key={idx}>{borderCountryName}</Link>
                    </li>
                    )
                })
                }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
