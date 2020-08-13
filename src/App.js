import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <CountriesList className="col-5" />
        <Route className="col-7" exact path='/:cca3' component={CountryDetail}/>
      </div>
    </div>
  );
}

export default App;


