import React from 'react'
import countries from '../countries'
import { Link } from "react-router-dom";

const Country = () => {
    return (
        <>
            {countries.map(el => {
                return (
                    < Link to={`/${el.cca3}`
                    } key={el.cca3} className="list-group-item list-group-item-action" > {el.flag} {el.name.common}</Link>
                )
            })}
        </>
    )

}

export default Country