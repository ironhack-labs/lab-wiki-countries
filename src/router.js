import React from 'react'
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/Navbar'
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import countries from './countries'
import styled from 'styled-components'



const Flex = styled.div`
display: flex;
flex-direction:row;
`

function router() {


    return (
        <Router>
            <NavBar/>
            <Flex>
            <CountriesList countries={countries}/> 
            <Switch>   
                 <Route component={CountryDetails} path="/:cca3" exact></Route>
            </Switch>
            </Flex>
        </Router>
    )
}

export default router
