import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import CountriesList from "./CountriesList"
import CountryDetails from "./CountryDetails"



function App() {

 
  return (
    <main className="container-flex">
      <Navbar />
      <div className="row">

        <BrowserRouter>
          <Route path="/" render={() => <CountriesList />} />
      
        <Route path="/:cca3" render={props => <CountryDetails {...this.props} />} />
      </BrowserRouter>
      </div>
    </main>
  );
}

export default App
