import React, { Component } from 'react'

import countries from '../../countries.json'

import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import CountryDetail from './CountryDetail'



class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            countries
        }
    }

    render() {

        return (

            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                            {this.state.countries.map((elm, idx) => 

                                    <div key={idx}>
                                        <Link to = {elm.cca3}>{elm.flag} {elm.name.common}</Link>
                                    </div> 
                                
                            )}
                        </div>
                        <div className = "col-7">
                            <Switch>
                                <Route path="/:cca3" render={(props) => <CountryDetail {...props} />} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CountriesList