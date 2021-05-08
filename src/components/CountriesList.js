import React from 'react'
import { Link } from "react-router-dom";

class CountryList extends React.Component {
    render(){
        const allNameCountries = this.props.allCountries.map((country, index)=>{
                return(
                    <Link to={`/countrydetails/${country.alpha3Code}`}><li key={index}> <img className='CountriesListImg' src={country.flag} alt={country.name} /> {country.name}</li></Link>
                    )
        })
        return(
    
            <div className='CountryList'>
            <ul>
            {allNameCountries}
            </ul>
            </div>
        )
    }
}

export default CountryList