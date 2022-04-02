import React from 'react';
import { Link } from 'react-router-dom';


export default function CountriesList({list}) {
  return (
    <div>
        {list && list.map((country) => {
            return (
                <p key={country._id}> <Link to={`/${country.alpha3Code}`} >{country.name.common}</Link> </p>
            )
        })}
    </div>
  )
}
