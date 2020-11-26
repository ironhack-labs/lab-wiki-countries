import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

//Dummies
// const Home = () => <h1 className="title">Home</h1>

function RouterApp(){
    return(
        <Router>
            <div>
                <Navbar/>
            </div>
            <div>
                <CountriesList/>
                {/* <Switch> */}
                <Route component={CountryDetails} exact path='/country/:cca3'/>
                {/* </Switch> */}
            </div>
        </Router>
    )

}

export default RouterApp