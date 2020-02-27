import React from 'react'
import { Link } from 'react-router-dom';
import Countries from './../countries.json'

function Country() {
    return (
        <div className="list-group">
             <h3>LIST OF COUNTRIES</h3>
                {Countries.map(oneCountry => {
                return(
                    <Link to={`/countries/${oneCountry.cca3}`}>
                        <div key={oneCountry.cca3}>
                        <h3>{oneCountry.name.official} {oneCountry.flag}</h3>
                        </div>
                    </Link>
                );
            })}
        </div>
    )
}

export default Country
