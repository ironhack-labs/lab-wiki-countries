import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import { NavLink } from 'react-router-dom'
import countries from './countries'
import NavBar from './components/NavBar'
import CountryDetail from './components/CountryDetail'


class Router extends Component {
  state = {
      countries
  }

  getBorderCountry(border){
    return countries.filter(country => country.cca3 === border ).map( country => {return {cca3: country.cca3, name:country.name.common}})
}

getCountry = (cca3)=>{
    const [country] = this.state.countries.filter ( country => {
      if( country.cca3 === cca3)
      return country 
    })
    const borders = country.borders.map( border => this.getBorderCountry(border)[0])
    country.borders = borders
    
    return country
}

  render() {
      return (
         < BrowserRouter >
         <NavBar countries={this.state.countries}/>
        
         { countries.map( ({flag, cca3, name: {common}}) => <NavLink to={`/${cca3}`}><span role="image" aria-label={cca3}>{flag}</span>{common}</NavLink>)}
         
         
         <Switch style={{display: 'flex'}}>
             <Route exact path='/:id' component={(props) => {
            return   <CountryDetail {...props} getCountry={this.getCountry}/>
             }}/>
         </Switch>
         </BrowserRouter>
      )
  }
}

export default Router 