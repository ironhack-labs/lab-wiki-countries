import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'


const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="columns">
                <CountriesList />
                <Switch>
                    <Route component={CountryDetails} path="/country/:id" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router
