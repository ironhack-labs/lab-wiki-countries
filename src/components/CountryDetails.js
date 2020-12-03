import React from 'react'
import Countries from '../countries.json'

export default function CountryDetails(props) {
    console.log(props.match.params)
    const countryId = props.match.params.id;
    const country = Countries.find(country => country.name.common === countryId);
    
    return (
        <div>
            <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{"width": "30%"}}>Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country.area} km
                  <sup>2</sup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        </div>
    )
}
