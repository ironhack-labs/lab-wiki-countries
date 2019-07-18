import React from 'react'
import data from '../countries.json'
import ReactCountryFlag from 'react-country-flag'
import {Link} from 'react-router-dom'
const CountryList = props => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-5" >
          {data.map((e,i)=>(
          <Link to={`/e/${e.cca3}`} className="list-group-item list-group-item-action" key={i}>
          <ReactCountryFlag code={e.cca2.toLowerCase()} />
          {e.name.common}
            </Link>
      ))}
          </div>
      </div>
      </div>
    )
}

export default CountryList
