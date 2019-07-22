import React from 'react'
import countries from '../countries.json'
import {Link} from 'react-router-dom'

const CountryDetail = (props) => {
  
  const findCountry =(id) =>{
    return countries.find(place => place.cca3 === id)
  }
  
  const country = findCountry(props.match.params.id)

  const borders = country.borders.map((border, i) =>
    <li key={i}>
      <Link to={`/details/${border}`}>
        {findCountry(border).name.common}
      </Link>
    </li>)
  
  return (
      <>
        <h1>{country.name.common}</h1>

        <table className="table">
          <tbody>
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
          </tbody>
        </table> 

      </>
  )
}

export default CountryDetail