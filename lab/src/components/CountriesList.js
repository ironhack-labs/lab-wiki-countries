import React, { Component } from 'react'
import countries from './countries.json'
import { Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

class CountriesList extends Component {
    constructor() {
        super()
        this.state = {
            countries: countries
        }
    }

    render() {
       
        return (
               <div className="container">
                <div className="row">
             <div className="col-5" styles="max-height: 90vh; overflow: scroll;">
            <div className="list-group">
                {this.state.countries.map(elm => <Link to={elm.cca3} className="list-group-item list-group-item-action"> {elm.name.common}{elm.flag}</Link>)} 
                
                </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default CountriesList