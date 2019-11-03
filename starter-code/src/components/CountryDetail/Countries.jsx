import React from 'react';
import { Link } from 'react-router-dom';

const Countries = (props) => {
const countryListTable =  props.countriesList.map((country, idx) => {

    return <div key={country.cca3}>
      <Link className='list-group-item list-group-item-action' to={`/${country.cca3}`}>
       {country.flag} {country.name.official}
      </Link>
    </div>
   })

  return(
    <div className="col-5">
      <div className="list-group">  
       {countryListTable}      
      </div>
    </div>
  )
}

export default Countries;