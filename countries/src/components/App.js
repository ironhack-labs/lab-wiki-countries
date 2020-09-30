import React, { Component } from 'react';
import './App.css';
import Navbar from './layout/NavBar'
import CountriesList from './layout/CountriesList'
import countries from '../countries.json'
import CountryDetails from './CountryDetails'

import { Switch, Route, Redirect } from 'react-router-dom'




class App extends Component {
        constructor() {
          super()
          this.state = {
            countries : countries

          }
      }

    
      render() {
        return (
          <>
            <Navbar />
            <div className='container'>
              <div className='row'>
              <div className="col-5 scroll">
                <div className="list-group">
                  {this.state.countries.map(elem => <CountriesList key = {elem.cca3} name = {elem.name.common} flag = {elem.flag} cca3= {elem.cca3} capital={elem.capital} area={elem.area} borders = {elem.borders}/> )}
                  <Switch>
                    <Route path ='/country/:country/:capital/:area/:borders' render={props =><CountryDetails {...props} />} />
                  </Switch>
                </div>
              </div>
              <CountryDetails/>
              </div>
            </div>
      
          </>
        );

      }
  
}

export default App;
