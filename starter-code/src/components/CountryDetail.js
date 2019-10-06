import React from 'react'
import {Link} from 'react-router-dom'

function CountryDetail (props) {


const country = props.list.find(country =>{
      return country.cca3 === props.match.params.code;
  })

const showBorders = ()=>{
  return country.borders.map((border,index) =>{
        const borderCountry = props.list.find(country=> country.cca3 === border)
        return(
            <div key={index}>
              <li><Link to={'/detail/'+ border}>{borderCountry.name.common}</Link></li>
            </div>
          )
  })
}

    return (
      <div>
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area} km<sup>2</sup></td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {showBorders()}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default CountryDetail;
