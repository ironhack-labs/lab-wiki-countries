import React from 'react'
import { Link } from "react-router-dom";
import countriesJSON from './../countries.json'

 const CountriesList = (props) => {
    return (
        <div>
            {countriesJSON.map((country) =>{
                return (
                    <div key={country.cca3}>
                        <div className="col-5" styles="max-height: 90vh; overflow: scroll">
                        <div className="list-group">
                        <Link to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>

                    </div>
                    </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default CountriesList