import React from "react"
import {Switch, Router} from "react-router-dom"
import CountryDetail from "./components/CountryDetail"

const Routes = ()=>{

    <Switch>

    <Route path= "/country-detail/:id" 
    render={(props)=>{return 
       <CountryDetail Countries={countriesData} {...props} />   }}
    />
    
    </Switch>

}


export default Routes