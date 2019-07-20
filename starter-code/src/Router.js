import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CountryDetail from './components/CountryDetail'
import countryList from './components/CountryList'

const Navbar = () => (
    <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
    </nav>
)


const Router = () => (
  <BrowserRouter>
  <Navbar/>
  <Route exact path="/" component={countryList}/>
  <Route path="/country/:id" component={CountryDetail}/>
  </BrowserRouter>
)

export default Router