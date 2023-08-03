import { useEffect, useState } from "react"
import { Link, Routes } from "react-router-dom"
import CountryDetails from "./CountryDetails"
import { Route } from "react-router-dom"

function CountriesList(props) {
  const [countries, setCountries] = useState([])

  useEffect(() => setCountries(props.countriesData), [props.countriesData])

  return (
    <>
      <div
        className="CountriesList col-5"
        style={{ maxHeight: '90vh', overflow: 'scroll' }}
      >
        <div className="list-group">
          {countries.map((country) => {
            const imgUrl = ` https://flagpedia.net/data/flags/icon/72x54/${String(
              country.alpha2Code
            ).toLowerCase()}.png`

            return (
              <Link
                to={`/${country.alpha3Code}`}
                className="card"
                style={{ width: '18rem' }}
                key={country.alpha3Code}
              >
                <div className="card-body">
                  <img src={imgUrl} alt="country-flag" className="" />
                  <div className="list-group-item card-text">
                    {country.name.common}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Routes>
        <Route path="/:countryId" element={<CountryDetails countriesData={countries} />} />
      </Routes>
    </>
  )
}

export default CountriesList