import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import countrydata from './countries.json'
import CountryCard from './CountryCard'
import CountryDetail from './CountryDetail'

export default class CountryList extends Component {
    state = {
        countries:countrydata
    }
    render() {
        return (
            <div>
                <header>
                    <h1>WikiCountries</h1>
                </header>
                <div className='container'>
                    <div className='country-list'>
                        {this.state.countries.map((country, index)=>(
                            <CountryCard 
                                key={country.cca + index.toString()}
                                country={country.name.common}
                                cca3={country.cca3}
                            />
                        ))}
                    </div>
                    <Route path='/:id' component={CountryDetail}/>
                </div>
            </div>
        )
    }
}
