import React from 'react'
import {Route, Switch} from "react-router";
import { Link, NavLink } from 'react-router-dom';
import CountriesList from "./CountriesList"
export default function NavBar() {
    return (
        <div>
        <nav>
            <NavLink exact to = "/">home</NavLink>
            <NavLink exact to= "/CountriesList">Countries</NavLink>
        </nav>

        <Switch>
            <Route exact path = "/CountriesList" component={CountriesList}/>
        </Switch>
        </div>
    )
}
