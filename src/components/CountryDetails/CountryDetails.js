import React from 'react'
import { useParams, Link } from 'react-router-dom';

function CountryDetails({ countries }) {
  const params = useParams();
  const country = countries.filter(country => country.alpha3Code === params.id)

  return (
    <div className='d-flex flex-column'>
      <div>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country[0].alpha2Code.toLowerCase()}.png`} alt="" width={150} />
        <p>{country[0].name.common}</p>
      </div>
      <div className='d-flex justify-content-around border-bottom'>
       <p>Capital</p> 
       <p>{country[0].capital}</p>
      </div>
      <div className='d-flex justify-content-around border-bottom'>
       <p>Area</p> 
       <p>{country[0].area}km²</p>
      </div>
      <div className='d-flex justify-content-around border-bottom'>
       <p>Borders</p> 
       <p>{country[0].borders.map(border => <Link key={border} to={`/${border}`}>{border}<br></br></Link>)}</p>
      </div>  
    </div>
  )
}


export default CountryDetails