import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import countries from './countries'
import CountryDetail from './components/CountryDetail'

class Router extends Component {
    state = {
        countries
    }

    getBorderCountry(border){
        return countries.filter(country => country.cca3 === border ).map( country => {return {cca3: country.cca3, name:country.name.common}})
    }

    getCountry = (cca3)=>{
        const [country] = this.state.countries.filter ( country => country.cca3 === cca3 ? country : null)
        const borders = country.borders.map( border => this.getBorderCountry(border)[0])
        country.borders = borders
        
        return country
    }
    render() {
        return (
            <BrowserRouter>
                <Nav countries={this.state.countries}/>
                <Switch switch="switch">
                    <Route exact path="/:id" component={ (props)=> <CountryDetail {...props} getCountry={this.getCountry} />} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router
