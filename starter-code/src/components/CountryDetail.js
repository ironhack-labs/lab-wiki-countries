import React from 'react'
import countries from '../countries.json'
import {Link} from 'react-router-dom'

const CountryDetail = (props) => {
  
  const country = countries.find(place => props.match.params.id === place.cca3)
  
  const findCountry =(id) =>{
    return countries.find(place => place.cca3 === id)
  }
  const borders = country.borders.map((border, i) =>
    <li>
    <Link to={`/details/${border}`}>
    {findCountry(border).name.common}
    </Link>
    </li>)
  
  return (
    
    
      <>
        <h1>{country.name.common}</h1>
        <table className="table">
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area} km<sup>2</sup></td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{borders}</ul>
            </td>
          </tr>
        </table>
      
    </>
  )
}

export default CountryDetail