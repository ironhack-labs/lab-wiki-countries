// This is the component that will receive the country code (cca3) in the URL. 
// This is actually the id of the country (example: /ESP for Spain, /FRA for France).

import React from 'react'
import countries from "../countries.json";  
import { Link } from 'react-router-dom';


export default function CountryDetail(props) {
    //console.log(props.match.params.country)
    const [countryData] = countries.filter(
      (filt) => props.match.params.country === filt.cca3
    );

    const returnCountryName = (item) => {
        const [result] = countries.filter((filt) => item === filt.cca3)
        return result.name.common
    }

    return (
      <div className="col-7">
        <h1>{countryData.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{countryData.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryData.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {countryData.borders.length > 0 ? (
                  countryData.borders.map((element, key) => (
                    <ul key={key}>
                      <li>
                        <Link to={element}>{returnCountryName(element)}</Link>
                      </li>
                    </ul>
                  ))
                ) : (
                  <span className="text-left">No Borders</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
