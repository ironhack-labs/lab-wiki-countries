
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import countries from '../countries.json'


class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            AllCountries: countries
        }
    }

    render() {
        

        return (
    
            <div className="col-5">
                <div className="list-group">
                    
                    {this.state.AllCountries.map((elm, idx) =>
                        
                        <Link to={`/details/${elm.cca3}`} key={idx} className="list-group-item list-group-item-action">{elm.flag} {elm.name.common}</Link> 
                    
                    )}
                </div>
            </div>
    
    
        )

    }

}


export default CountriesList;


