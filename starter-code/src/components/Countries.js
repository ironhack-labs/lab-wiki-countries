import React from 'react';
import CountryItem from './CountryItem'
import '../styles/Countries.css'


const Countries = ({countries}) => {

    const countriesList = countries.map(country => <CountryItem key={country.ccn3} country={country}/>)

    return ( 
        <div className="countriesList" >
            {countriesList}
        </div>
     );
}
 
export default Countries;