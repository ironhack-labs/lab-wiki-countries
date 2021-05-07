import React from 'react'
import {Link} from 'react-router-dom'


class CountriesList extends React.Component {

    render(){
        const allCountries = this.props.countries.map((country, index)=>{
            const countryCCA = country.cca2.toLowerCase()
            const flag = `https://www.countryflags.io/${countryCCA}/flat/64.png`
            return (
                <Link to={`/country/${country.cca3}`}><li key={index}><img src={flag} alt={country.name.common} />{country.name.common}</li></Link>
            )
        })

        return (
            <div className="CountriesList">
                <ul>
                  {allCountries}  
                </ul>            
            </div>
        )
    }
}

export default CountriesList