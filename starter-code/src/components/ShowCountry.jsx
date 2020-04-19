import React from 'react';
import "./ShowCountry.css"
import { Link } from 'react-router-dom';
import countries from "../countries.json"

export default function ShowCountry(props) {
  const code = props.match.params.country
  var countryResult = countries.filter(element => element.cca3.includes(code));
  var country = countryResult[0]
  var bordersCountries = country.borders.map(countryCode => countries.filter((element => element.cca3.includes(countryCode))))
  
    return (
        <div>
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="width30">Capital</td>
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
                    {bordersCountries.flat().map(bordercountry =>(
                      <li><Link to={`/${bordercountry.cca3}`}>{bordercountry.name.common}</Link></li>
                    ))
                    }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    );
}
