
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CountriesList({ countries }) {

  const [countriesArray, setCountries] = useState(countries)

  return (

    <div className="container">
      <div className="row">
        <div className="col-9">
          <div className="list-group">
            {countriesArray.map(country => {
              return (
                <div>
                  <Link className='list-group-item list-group-item-action' to={`/${country.alpha3Code}`} key={country.alpha3Code}>{country.name.official}
                  <div>
                        <img 
                        src={`https://flagpedia.net/data/flags/icon/72x54/${ country.alpha2Code.toLowerCase() }.png`}
                        alt={ country.name.common } 
                        />
                        <h1>{ country.name.common }</h1>
                    </div></Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>

  )
}

export default CountriesList

