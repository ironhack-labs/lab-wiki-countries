import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail'
import CountriesList from './components/CountriesList'
import Navbar from './components/Navbar'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className = 'container class'>
        <div className = 'row text-left'>
          <div class="col-5 overflow">
            <CountriesList/>
          </div>
          <div className = "col-7">
            <Route exact path="/countries/:id" component = {CountryDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
