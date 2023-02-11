import './styles.css'
import React from 'react';
import { Link } from 'react-router-dom';

function CountryList({items}){
    
    return (
        <div>
            <div className='country-list'>
                {items.map((item, index)=>(
                     <Link key={index} to={`/${item.alpha3Code}`}>
                        <img 
                        width={20}
                        src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`} 
                        alt={item.name.official} /> {item.name.official}
                         
                     </Link>
             ))}
            </div>
        </div>
    )
}

export default CountryList;

