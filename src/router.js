import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import countries from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

const router = () => {
    return (
        <Router>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <CountriesList countries={countries} />
                <Route component={CountryDetails} path='/:cca3'></Route>
            </div>
        </Router>
    )
}

export default router
