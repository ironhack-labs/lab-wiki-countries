import React from 'react'
import {Link} from 'react-router-dom'
import CountryDetails from './CountryDetails'

class CountriesList extends React.Component{
    render(){
        return(
            <div className="countries-list">
                <ul>
                    {this.props.countries.map((country, index)=>{
                        return (
                            <li key={index}>
                                <Link to={`/country/${country.cca3}`} name={country.name.common}><img src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`} alt="flag-country" /> {country.name.common}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default CountriesList
