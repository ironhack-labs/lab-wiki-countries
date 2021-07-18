import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CountryDetails from './CountryDetails'
 

export default class CountriesList extends Component {


    render() {
        const {countries} = this.props

        return (
            <div className="col-5 list-scroll">
                <div className="list-group">
                    {countries.map((country, index) => {
                        return (
                            <Link   to={`/countries/${country.cca3}`}
                                    className="list-group-item list-group-item-action" 
                                    key={index} >
                                {country.name.common}
                            </Link>
                        )
                    })};
                </div>
            </div>                 
        )                       
    }
}
