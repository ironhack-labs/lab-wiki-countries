import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './styles.css'

const CountryDetails = ({countries}) => {
  const {countryAlpha2Code} = useParams()

  const {name, capital, area, borders, alpha2Code} = countries.find(({alpha3Code}) => alpha3Code === countryAlpha2Code)

  return (
    <div className='col-7 list'>
      <img 
        src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} 
        alt={`${name.common} flag`} 
        className='flag'
      />
      <h1>{name.official}</h1>
      <table className='table'>
        <thead></thead>
        <tbody>
          <tr>
            <td className='capital'>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borders.length === 0 ? <li>None</li> : borders.map((borderCode) => {
                  const {name, _id} = countries.find(({alpha3Code}) => alpha3Code === borderCode)

                  return (
                    <li key={_id}>
                      <Link className='link'>{name.common}</Link>
                    </li>
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