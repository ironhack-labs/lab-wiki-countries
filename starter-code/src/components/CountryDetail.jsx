import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

class CountryDetail extends Component {
  render() {
    let country = countries.find(element => element.cca3 === this.props.match.params.id);
    let countriesBorder = country.borders.map((elem, i) => countries.find(element => element.cca3 === elem))
console.log(countriesBorder)
    return (
      <div className="CountryDetail">
        <div className="">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead />
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countriesBorder.map((elem, i) => (
                      <li key={i}>
                        <Link to={"/countryDetail/" + elem.cca3}>
                          {elem.name.common}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
