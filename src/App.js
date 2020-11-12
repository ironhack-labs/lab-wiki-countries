import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Countrieslist from './components/Countrieslist'
import Countrydetails from './components/Countrydetails'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div style={{width: '40%', float:"left"}}>
                <Countrieslist />
        </div>
        <Switch>
        <Route exact path='/country/:id' component={Countrydetails}/>
        </Switch>
    </div>
  );
}

export default App;
