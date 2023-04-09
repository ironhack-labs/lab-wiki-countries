import React from 'react'
import { useParams, Link } from 'react-router-dom'

function CountryDetail({ countries }) {
  const params = useParams()
  if (!countries) {
    return <></>
  }
  const country = countries
    .filter(country => country.alpha3Code === params.id)
    .shift()

  const showBorders = () => {
    if (country.borders.length) {
      return (
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              {country.borders.map((border) => (
                <li key={border}>
                  <Link key={border} to={`/${border}`}>{countries.find((country) => country.alpha3Code === border).name.official}</Link>
                </li>
              ))}
            </ul>
          </td>
        </tr>
      )
    }
  }

  return (
    <div className="col-7">
      <h1 className='d-flex justify-content-center align-items-center flex-column' style={{ textAlign: 'center' }}>
        <img key={country.alpha2Code} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='' style={{ width: '200px' }} />
        {country.name.official}
      </h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>
              {country.capital}
            </td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          {
            showBorders()
          }
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetail