import React from 'react';
import countries from '../data/countries';
import {Link} from "react-router-dom";

export default function CountryDetail(props) {

  let country = countries.find((country) => country.cca2 === props.match.params.id)

        return (
            <div>
            <h2>{country.name.common}</h2>
            <table>
              <tbody>
                <tr>
                  <td style={{ width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
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
                      {
                        country.borders.map(border =>
                            <li>
                                <Link to={`/countries/detail/${border}`}>{border}</Link>    
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