import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";


export default class CountryDetail extends Component {
  // constructor(props){
  //   super()
  //   this.state = {
  //     countries: props.countries
  //   }
  // }

  render() {
    return (
      <div className="col-7">
        <h1>{this.props.country.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{this.props.country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.props.country.area} <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.props.country.borders.map((el, idx) => {
                    let foundCountry = this.props.allCountries.filter(
                      country => {
                        console.log(el)
                        return (
                          country.cca3
                            .toLowerCase()
                            .indexOf(el.toLowerCase()) >= 0
                        );
                      }
                    );
 return <li><Link to={"/country/" + el}>{foundCountry[0].name.common}</Link></li>
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
