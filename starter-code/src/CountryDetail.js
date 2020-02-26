import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class CountryDetail extends React.Component {
  render() {
    return (
      <div class="col-7">
        <h1>{this.props.country.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{this.props.country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.props.country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.props.country.borders.map(border => {
                    let borderName = this.props.countries.find(
                      c => c.cca3 === border
                    ).name.common;

                    return (
                      <li>
                        <Link to={"/" + border}>{borderName}</Link>
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

{
  /* <Link
to={"/" + country.cca3}
className="list-group-item list-group-item-action"
>
{country.flag} {country.name.common}
</Link> */
}

export default CountryDetail;
