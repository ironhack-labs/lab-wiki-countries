import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  render() {
    const { name, area, capital, borders } = this.props;

    return (
      <div className="col-7">
        <h1>{name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders.map((border, idx) => {
                    return (
                      <li key={idx}>
                        <Link to={`/${border.cca3}`}>{border.name}</Link>
                      </li>
                    );
                  })}
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
