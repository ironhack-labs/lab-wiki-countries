import React, { Component } from 'react'
import countries from './countries.json'
import { Link } from 'react-router-dom';

class CountriesList extends Component {
    constructor() {
        super()
        this.state = {allCountries: countries}
    }
    render() {
        return (
                <div className="container list">
                {this.state.allCountries.map((elm,idx)=> 
                    <div key = {idx} className="row">
                        <Link to = {`/${elm.cca3}`}>
                            <div className="col countries">
                                <p>{elm.flag}</p> 
                                <p>  <strong>{elm.name.common}</strong> <br /></p>
                            </div>
                        </Link>
                    </div>
                )}
                </div>

    
        )
    }
}

export default CountriesList