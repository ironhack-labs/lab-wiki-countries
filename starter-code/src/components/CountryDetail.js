import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  render() {
    if (!this.props.data) {
      return <p>Please select a country to display their information</p>;
    }
    return (
      <>
        {console.log(this.props.data)}
        <h1>{this.props.data.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{this.props.data.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.props.data.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.props.data.borders.map((e, i) => (
                    <li key={i}>
                      <Link to={`/${e}`} >{e}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default CountryDetail;
