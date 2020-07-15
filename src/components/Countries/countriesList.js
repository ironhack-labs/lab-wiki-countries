import React, { Component } from 'react'
import countriesFromApi from './../../countries.json'
import CountryCard from './countryDetail'
import Details from './details'
import { Switch, Route } from 'react-router-dom'




class CountryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: countriesFromApi
        }
    }

   
    

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className="col-5 listaCountries">
                        <div className="list-group">
                            <h2>{this.state.countries.map((elm, idx) => <CountryCard {...elm} key={idx} />)}</h2>
                        </div>
                    </div>

                    <div className='col-7'>
                        <Route path='/:details' render={(props) => <Details {...props} theCountry={this.state.countries}/>} />
                    </div>
                </div>
            </div>





            
        )
    }
}

export default CountryList
