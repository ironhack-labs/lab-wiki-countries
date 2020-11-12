import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountriesList = () => {
    return (
        <div>
            {countries.map((eachCountry, index)=> {
                return (
                    <div key={eachCountry.cca3}>
                        <img src={eachCountry.flag} alt='flag'/>
                       <Link to={`/countries/${eachCountry.cca3}`}>{eachCountry.name.common}</Link> 
                    </div>    
                )
            })}
            
        </div>
    )
}


export default CountriesList;