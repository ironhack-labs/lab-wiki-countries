import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail'
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <CountriesList />
          </div>
          <div className="col">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/list/:id' render={(props) => <CountryDetail key={Math.random()} {...props}/>} /> 
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
