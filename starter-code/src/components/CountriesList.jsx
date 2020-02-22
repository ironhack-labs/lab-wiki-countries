import React from 'react'
import {Link} from 'react-router-dom'

export default function CountriesList({list}) {
    return (
        <div className='list-group scroll'>
            {list.map((country, i)=>(
                   <Link  key={i} to={`/${country.cca3}`}>
                   <div  className='list-group-item list-group-item-action' >{country.flag} {country.name.common}</div>
                   </Link>
            ))}
        </div>
    )
}
