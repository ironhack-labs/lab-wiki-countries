import React from 'react'
import {Link} from 'react-router-dom'
function CountriesList({countries}) {
  const colStyles = {maxHeight: "90vh", overflow: "scroll"}

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5" style={colStyles} >
            <div className="list-group">
              {countries.map(country => {
                return (
                    <div key={country.alpha3Code} className='d-flex flex-column align-items-center my-3 list-group-item'>
                      <img  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
                      <Link  to={`/countries/${country.alpha3Code}`} className='list-group-item-action'> {country.name.official}</Link>
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CountriesList