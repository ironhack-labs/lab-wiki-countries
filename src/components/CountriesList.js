import React from 'react'
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    return (
        <div className="list-group">

            {
                props.countries.map(country=>{
                    return(

                        <Link className="list-group-item list-group-item-action" to={`/countries/${country.cca3}`}>{country.flag}{country.name.common}</Link>

                    )
                })
            }

        </div>
    )
}
