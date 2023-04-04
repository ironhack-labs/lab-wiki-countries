import React from 'react'

function CountriesList({ data }) {
  
  return (
    <div className="row">
          
          <div className="col-5" style={{ overflow: 'scroll', maxHeight: '90vh' }}>
            <div className="list-group">
              {data.map((country) => (
                <div className='container'>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country flag" />
                <a key={country.alpha3Code} className="" href={`/${country.alpha3Code}`}>{country.alpha2Code} {country.name.common} </a>
              </div>
              ))}
            </div>
          </div>
    </div>
  )
}
export default CountriesList