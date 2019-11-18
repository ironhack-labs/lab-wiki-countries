import React, { Component } from "react";
import "./countryDetail.css";
import {Link} from 'react-router-dom';


export default class countryDetail extends Component {

  showBorders = () => {

  }

  render() {
    // console.log("Render: countryDetail")
    // console.log(this.props.match.params.id);
    // console.log(this.props);
    // console.log(this.props.countries);
    // console.log(this.props.countries[0].name.common);
    

    let country = this.props.countries.find((eachCountry) => {
      // console.log(eachCountry.name.common)
      return this.props.match.params.id === eachCountry.cca3
    })

    // console.log(country)

    return (
      <div className="col-7">
            <h1>{country.name.common}</h1>
            {this.props.match.params.id}
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {country.borders.map((eachBorder, i) => {
                        return <li key={i}><Link to={`/country/${eachBorder}`} >{eachBorder}</Link></li>
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
