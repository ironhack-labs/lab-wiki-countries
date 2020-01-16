import React from 'react';
import CountryItem from './CountryItem'
import '../styles/Countries.css'


const Countries = (props) => {
    const {countries, changeSelected} = props
    console.log(props)
    const countriesList = countries.map(country => <CountryItem key={country.ccn3} country={country} onClick={changeSelected}/>)

    return ( 
        <div className="countriesList" >
            {countriesList}
        </div>
     );
}
 
export default Countries;