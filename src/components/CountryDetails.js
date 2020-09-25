import React from 'react'
import countries from "../countries.json";
import {Link} from "react-router-dom";

export default function CountryDetails(props) {
    // console.log("country id: ",props.match.params.id)
    const countryDetails = countries.find(country => {
        return country.cca3 === props.match.params.id;
    })
    const borders = countryDetails.borders.length > 0 ? countryDetails.borders.map((border) => {
        return (<li><Link to={`/${border}`}>{border}</Link></li>)
    }) : <p>none</p>
    console.log("countryDetails.border: ",countryDetails.borders)
    return (
<div className="col-7">
    <h1>{countryDetails.name.official}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{countryDetails.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{countryDetails.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {borders}
                    {/* <li><a href="/BEL">Belgium</a></li>
                    <li><a href="/DEU">Germany</a></li>
                    <li><a href="/ITA">Italy</a></li>
                    <li><a href="/LUX">Luxembourg</a></li>
                    <li><a href="/MCO">Monaco</a></li>
                    <li><a href="/ESP">Spain</a></li>
                    <li><a href="/CHE">Switzerland</a></li> */}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}
