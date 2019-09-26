import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer'
import CountryContainer from './components/country/CountryContainer'
import CountriesContainer from './components/countries/CountriesContainer'

export default function Router() {
    return (
        <>
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          
          <BrowserRouter>
          <div className="col-5">
            <CountriesContainer/>
            </div>
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/countries" component={CountriesContainer} />
                <Route exact path="/countries/:cca3" component={CountryContainer} />
            </Switch>
        </BrowserRouter>
        
        </div>
        </div>
        </>
    )
}
