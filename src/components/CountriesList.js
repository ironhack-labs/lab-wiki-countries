import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

 const CountriesList = (props) => {
    return (
        <div>
            {countries.map((eachCountry, index)=>{
                return(
                    <div key={eachCountry.cca3}>
                    <img src={`https://www.countryflags.io/${eachCountry.cca2}/flat/64.png`} alt="" />
                        <h3><Link                        
                        to = {`/countriesdetail/${eachCountry.cca3}`}>{eachCountry.name.common}</Link></h3>
                    </div>
                )
            })}
        </div>
    );
};

export default CountriesList;