import React from 'react'
import Countries from '../countries.json'
import { useParams, Link } from 'react-router-dom'

export default function CountryDetails() {

  const { countryCode } = useParams();

  console.log(countryCode);

    // Method .find() returns the first found matching element,
  // or `null` if no matching element is found.
  const foundCountry = Countries.find((country) => {   //  <== ADD
    return country.alpha2Code === countryCode;
  });

  return (
      <div className="col-7">
        <h1>France</h1>

        
        {/* <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>Paris</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                551695 km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li><a href="/AND">Andorra</a></li>
                  <li><a href="/BEL">Belgium</a></li>
                  <li><a href="/DEU">Germany</a></li>
                  <li><a href="/ITA">Italy</a></li>
                  <li><a href="/LUX">Luxembourg</a></li>
                  <li><a href="/MCO">Monaco</a></li>
                  <li><a href="/ESP">Spain</a></li>
                  <li><a href="/CHE">Switzerland</a></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
  )
}
