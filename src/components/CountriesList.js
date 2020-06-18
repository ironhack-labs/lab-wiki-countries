import React from 'react'
import countriesJson from '../countries.json'
import {Link} from 'react-router-dom'


export default class CountriesList extends React.Component {

    state = {
        countries: countries
    }


    render() {        
        let countryCode = countries.filter((country) => cca3 === this.props.match.params.cca3);

    render(){
        const {country} = this.state
        
        return (
            <div>
            <h1>{country.name.common}</h1>
               <div classname ='capital' ><p>Capital</p><p>{country.capital}</p></div>
               <div classname ='area' ><p>Area</p> <p>{country.area}</p></div>
               <p>Border</p>
            </div>    
        )
    }
};

export default CountriesList;