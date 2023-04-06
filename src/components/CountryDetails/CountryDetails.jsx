import React from 'react'
import { Link, useParams } from 'react-router-dom'

function CountryDetails({ countries }) {

  const { alpha3Code } = useParams()


  return (
    <div>
      {countries
        .filter(country => country.alpha3Code.includes(alpha3Code))
        .map(country =>
          <div className="card m-3 w-100 d-flex justify-content-center" key={country.alpha3Code}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} className="card-img-top m-5 ps-5" alt="countryPicture" style={{ width: 350}}/>
              <h5 className="card-title">{country.name.common}</h5>
              <div className='d-flex flex-row border-bottom'>
                <p className='m-2'>Capital</p>
                <p className="list-group-item m-2 ms-5">  {country.capital}</p>
              </div>
            <div className='border-bottom d-flex flex-row'>
              <p className='m-2'>Area</p>
              <p className="list-group-item m-2 ms-5">{country.area} km2</p>
            </div>
            <div className='d-flex flex-row'>
              {country.borders.length > 0 && (<>
                <div>
                  <p className='m-2'>Borders</p>
                </div>
                <div className="list-group-item border-0 ms-5 mt-2">
                  {countries.filter(country => country.borders.includes(alpha3Code))
                  .map(borders => {
                    return <Link to={`/${borders.alpha3Code}`}>
                      <div className="list-group-item border-0">{borders.name.common}</div>
                    </Link>
                  })}
                </div>
              </>)}
            </div>
          </div>
        )}
    </div>
  )
}

export default CountryDetails