import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Layout from './components/Layout'
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

const router = () => {
    return (
        <Router>
            <Layout />
            <div style={{display:'flex'}}>
            <CountriesList />
            <Switch>
                <Route component={CountryDetail} path="/:cca3"/>
            </Switch>
            </div>

        </Router>
    )
}

export default router
