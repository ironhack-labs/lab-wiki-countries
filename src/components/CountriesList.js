import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountriesList = () => {
    return (
        <div class="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            {countries.map((eachCountry, index)=> {
                return (
                    <div key={eachCountry.cca3}>
                        <span role='img' aria-label='emoji'>{eachCountry.flag} </span> 
                       <Link to={`/countries/${eachCountry.cca3}`}>{eachCountry.name.common}</Link> 
                    </div>    
                )
            })}
            
        </div>
    )
}


export default CountriesList;