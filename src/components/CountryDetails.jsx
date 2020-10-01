import React from 'react'
import countries from '../countries.json'


export default function CountryDetails(props) {


  const getCountry = (cca3) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    }
    return countries.find(theCountry)
  };

  const country = getCountry(props.match.params.cca3)

    return (
      <div class="col-7">
          <h1>{country.name.common}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{}}>Capital</td>
                <td>Paris</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>551695 km
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
          </table>
        </div>
    )
  }


