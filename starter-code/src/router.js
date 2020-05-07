import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Countries from './pages/Countries'
import CountryDetail from './pages/CountryDetail'
import 'bootstrap/dist/css/bootstrap.css'

// Dummy components

const AppRouter = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact component={Countries} path="/" />
      <Route exact component={CountryDetail} path="/:id" />
    </Switch>
  </Router>
)

export default AppRouter
