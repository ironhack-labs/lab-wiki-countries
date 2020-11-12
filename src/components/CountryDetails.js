import React from 'react'
import countries from '../countries.json'

const CountryDetails = (props) => {
    console.log(props);
    let getCountry = id => countries.find(obj => obj.cca3 === id);

    const { params } = props.match;

    const foundCountry = getCountry(params.id)

    return (
        <div class="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{foundCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
              <ul> {foundCountry.borders.map(country => <li>{country}</li>)}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

       
    )
}

export default CountryDetails
