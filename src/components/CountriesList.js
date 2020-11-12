
import React from 'react'
import { Link } from 'react-router-dom' //Vamos a hacer que podamos acceder a los detalles de los projects al clicar en uno, por lo tanto, debemos agregar links
export default function CountriesList({countries}) {
    return (
        <div className="col-5">
            <div className="list-group">
                {countries.map((eachCountry, index) => {
                    return (
                        <div key={eachCountry.cca3}>
                        <p className="list-group-item list-group-item-action"><Link to={{pathname:`/${eachCountry.cca3}`, state: {countriesState: countries}}}>{eachCountry.name.common}</Link></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}