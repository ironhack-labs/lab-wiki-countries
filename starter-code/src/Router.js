import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import CountriesList from './components/CountriesList'
import CountriesDetail from './components/CountriesDetail'

const Navbar = () => (
  <div className="navbar navbar-dark bg-primary mb-3">
    <NavLink exact to="/" activeClassName="navbar-brand">
      WikiCountries
    </NavLink>
    <Switch></Switch>
  </div>
)

const Router = () => (
  <div>
    <Navbar />
    <CountriesList />
    <Switch>
      <Route exact path="/:id" component={CountriesDetail} />
      {/* <Route exact path="/characters" component={CharactersContainer} />
      <Route exact path="/character/:id" component={CharacterDetail} /> */}
    </Switch>
  </div>
)

export default Router
