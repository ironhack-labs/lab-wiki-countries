import React from 'react'
import countries from '../data/countries';
import {Link, Route} from "react-router-dom";

export default function CountryDetail() {

//   let country = countries.find((country) => country.cca2 == props.match.params.cca2);

        return (
            <div class="col-7">
            <h1>{this.props.name}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: "30%"}}>Capital</td>
                  <td>{this.props.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.props.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {
                        countries.borders.map(country =>
                            <li>
                                <Link to={`/countries/detail/${country.cca2}`}>{country.name.official}  </Link>    
                            </li>
                        )
                        }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
}
