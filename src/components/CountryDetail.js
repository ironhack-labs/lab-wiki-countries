import { useState } from "react"
import { Link, useParams } from "react-router-dom"

function CountryDetail({ countries }) {

  const { country_id } = useParams()

  const [countriesSet, setCountriesSet] = useState(countries)

  const country = countriesSet.find(country => country.alpha3Code === country_id)


  return (
    <div className="container">
   <div className="row">
    <div className="col-8">
    <div className="className='list-group-item list-group-item-action'">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={country.name.common}
        height={200}
      />
      <h1>{country.name.official}</h1>
      <p>{country.capital}</p>
      <p>{country.area} km</p>
      <ul>
        {
          country.borders.map(border => (
            <li key={border}>{border}</li>
          ))
        }
      </ul>

      <Link className="btn btn-danger" to="/">Back</Link>

    </div>
    </div>
    </div>
    </div>



  )
}

export default CountryDetail
