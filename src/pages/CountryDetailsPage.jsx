import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getCountryDetail } from "../services/countryService";



function CountryDetailsPage() {
  const { alpha3code } = useParams()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    getCountryDetail(alpha3code)
    .then(countryApi => {
      setCountry(countryApi)
    })
    .catch(err => {
      console.error(err)
    })
  }, [alpha3code])

  if(!country) return "Loading..."

    return (
      <div className="container">
        <p>Country Details</p>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td >Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area} km<sup>2</sup></td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
              <ul>
                {country.borders.map((alpha3Code) => {
                  return (
                    <li key={alpha3Code}>
                      <Link to={`/detail/${alpha3Code}`} >
                        {alpha3Code}
                      </Link>
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

export default CountryDetailsPage;
