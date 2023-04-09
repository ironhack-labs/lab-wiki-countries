import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import countriesService from '../services/countries.service'

export default function CountriesDetails({ countries }) {

  const [country, setCountry] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    countriesService.detail(id)
      .then((foundCountry) => {
        setCountry(foundCountry)
      })
      .catch(console.error)
  }, [id])

  if (!country) return null


  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital}</td>
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
              <ul style={{ listStyle: "none" }}>
                {country.borders.map((b) => {
                  const borderCountry = countries.find((c) => c.alpha3Code === b)
                  return (
                    <li key={b}><Link to={`/countries/${b}`}>{borderCountry.name.common}</Link></li>
                  )
                }
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
