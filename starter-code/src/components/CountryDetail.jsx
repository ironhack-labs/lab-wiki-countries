import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

class CountryDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let selectId = this.props.match.params.id;
    let selectCountry = countries.filter(e => e.cca3 === selectId)[0];
    // let bordersCountry = selectCountry.borders;
    return (
      <div className="col-7 border border-secondary rounded">
        <h1>{selectCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{selectCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {new Intl.NumberFormat("de-DE", {
                  maximumSignificantDigits: 3
                }).format(selectCountry.area)}{" "}
                km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {selectCountry.borders.map(e => (
                    <li>
                      <Link
                        className="list-group-item list-group-item-action"
                        to={"/" + e}
                      >
                        {countries.filter(elemt1 => elemt1.cca3 === e)[0].flag}{" "}
                        {e}
                      </Link>
                    </li>
                  ))}
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
