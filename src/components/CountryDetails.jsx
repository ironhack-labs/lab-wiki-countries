import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import axios from "axios"
import loading from '../images/ZKZg.gif'

function CountryDetails(props) {
  const {countriesData} = props
  const [foundCountry, setFoundCountry] = useState(null)
  const { countryId } = useParams()

  useEffect(() => {
    // const country = countriesData.find(country => country.alpha3Code === countryId)
    // if (country) setFoundCountry(country)

    axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then(response => {
        setFoundCountry(response.data)
      })
      .catch(error => console.error(error))
    
  }, [countriesData, countryId])

  return (
    <div className="col-5 mt-5">
      {!foundCountry && <>
        <img src={loading} style={{ width: '10%'}} alt="loading" className="loading-gif"/>
      </>}

      {foundCountry && (
        <>
          <img
            src={` https://flagpedia.net/data/flags/icon/72x54/${String(
              foundCountry.alpha2Code
            ).toLowerCase()}.png`}
            alt="country flag"
            style={{width: 100, padding: 10}}
          />
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul style={{listStyle: 'none'}}>
                    {foundCountry.borders.map((border) => {
                      const borderCountry = countriesData.find(
                        (country) => country.alpha3Code === border
                      )
                      return (
                        <li key={border}>
                          <Link to={`/${border}`}>
                            {borderCountry && borderCountry.name.common}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default CountryDetails