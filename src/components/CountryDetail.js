import React from 'react'
import {Link} from "react-router-dom" 
import countries from "./../countries.json"

function CountryDetail(props) {
    
    console.log('props.match.params', props.match.params)

    const countryCode =  props.match.params.cca3

    let findCountry = (code) => {
        let thisCountry = countries.find( country => country.cca3 === code )
        return thisCountry
    }

    const country = findCountry(countryCode)

    return (
        <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td >Capital</td>
              {/* style="width: 30%;" */}
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
                    {country.borders.map( countrycode => {
                        let neighbour = findCountry(countrycode)
                        return <li> <Link to={`/country-details/${neighbour.cca3}`} >{neighbour.name.common} </Link> </li>
                    } ) }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default CountryDetail
