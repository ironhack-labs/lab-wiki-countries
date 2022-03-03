import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function CountryList() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((response) => {

      setCountries(response.data)

    })
  
  }, [])

  return (
        <div className="col-5">
            <div>

              {countries.map((country) =>

              <div className="country-box">
              <Link to={`/${country.alpha3Code}`}><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>{country.name.common}</Link>
              </div>

              )}

            </div>
        </div>
  )
}

export default CountryList