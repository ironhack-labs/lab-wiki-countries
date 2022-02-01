import React from 'react';
import { Link } from 'react-router-dom';


const CountriesList = ({countries}) => {
    return (
        <>
        <ul>
            {countries.map((country) => 
                <li><Link 
                to= {`/${country.alpha3Code}`} 
                key={country.alpha3Code} 
                className='list-group-item list-group-item-action' 
                >
                <img src= {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt='flag' style={{width: '25px', marginRight: '10px'}}/>
                {country.name.common}
                </Link></li>)}           
        </ul>
        </>
    )
}

export default CountriesList;