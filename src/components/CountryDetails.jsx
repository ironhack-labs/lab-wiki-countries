import React from 'react'
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom'

function CountryDetails({countries}) {
    const {alpha3Code} = useParams()
    const country = countries.find((country)=>country.alpha3Code===alpha3Code)
    console.log(country)

  return (
    <div className="col-7">
    <h1>{country.name.official}</h1>
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style={{width:"30%"}}>Capital</td>
          {country.capital.map((capital)=><td>{capital} </td>)}
        </tr>
        <tr>
          <td>Area</td>
          <td>
            {country.area} km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
            {country.borders.map((border)=>{
                const borderCountry = countries.find((country)=>country.alpha3Code===border)
                return(
                    <li><Link to={`/${border}`}>{borderCountry.name.official}</Link></li>
                )
            })}
              
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default CountryDetails