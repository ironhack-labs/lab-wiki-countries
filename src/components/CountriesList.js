import React from 'react'
import {Link} from 'react-router-dom'

export default function CountriesList(props) {
    return (
      <div>
        {props.countries.map((country, index) => {
          return (
            <div key={index}>
                <Link className="list-group-item list-group-item-action" to={`/countries/${country.cca3}`}>
                <p>{country.flag} {country.name.common}</p>
                </Link>
            </div>
          );
        })}
      </div>
    );
}
