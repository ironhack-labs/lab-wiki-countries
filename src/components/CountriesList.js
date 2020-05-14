import React, { Component } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom';


export default class CountriesList extends Component {
    state= {
        countries: countries
    }

    render() {
        return(
            <div className="col-5" style={{height: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
            <ul>
                {this.state.countries.map((country) => {
                    return (    
                        <Link key={country.cca3} 
                        className="list-group-item list-group-item-action" 
                        to={`/country/${country.cca3}`}> 
                        {country.flag} {country.name.official}</Link>
                    )
                })}
            </ul>
            </div>
            </div>
        )
    }

}