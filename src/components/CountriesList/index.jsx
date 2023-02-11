import './styles.css'
import React from 'react';
import { Link } from 'react-router-dom';

function CountryList({items}){
    
    return (
        <div>
            <ul>
            <div className='country-list'>
                {items.map((item, index)=>(
                     <Link to={`/${item.alpha3code}`}>
                        <img 
                        src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2code}.png`} 
                        alt={item.name.official} /> {item.name.official}
                         
                     </Link>
             ))}
            </div>
            </ul>
        </div>
    )
}

export default CountryList;




