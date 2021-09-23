import React from 'react'
import { Link } from 'react-router-dom'


export default function CountryItem({name, flag, cca3}) {

  
    return (

        <div>

             <Link className="list-group-item list-group-item-action" to={`/${cca3}`}>{flag}{name.common}</Link>

        </div>
    )
}
