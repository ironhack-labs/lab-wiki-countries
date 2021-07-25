import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Countrieslist from './components/Countrieslist';
import Countrydetails from './components/Countrydetails';
import Countrieselement from './components/Countrieselement';
import countries from './countries.json';

class App extends Component {
  state={
    countries,
  } 

  render() {



  return (
    <div className="App">
      
      <Navbar/>
      <div className='d-flex  align-items-baseline'>
      <Countrieslist/>
      
      <Switch>
        <Route path="/:code" component={Countrydetails}/>
      </Switch>

      </div>
      
        
    </div>
  );
}
}          

export default App;
