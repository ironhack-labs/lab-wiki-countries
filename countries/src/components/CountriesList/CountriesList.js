import React from 'react';
import { Link } from 'react-router-dom';


const CountriesList = ({countries}) => {
    return(
    <div>
        {countries.map((elm) => {
            return (
                
                <div key={elm.cca3}>
                    <h5><Link to={`/${elm.cca3}`}>{elm.name.official}</Link></h5>
                </div>
               
            )
        })}
    </div>
    )
}

export default CountriesList