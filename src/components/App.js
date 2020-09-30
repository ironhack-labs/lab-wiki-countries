import React from 'react';
import './App.css';
import Navbar from './layout/Navbar'
import CountriesList from './countriesList/CountriesList'
import CountryDetails from './countryDetails/CountryDetails'


import { Route, Switch } from 'react-router-dom'


function App() {

  return (
    
    <div id="root">
      
     <Navbar />
    
      <div className="container-flex">
        
        <div className="row">
          
          <div className = "col-5" style ={{overflow: "scroll", maxHeight: '650px'}}  >
    
            <CountriesList />
          
          </div>

        </div>

      </div>

          
        <Switch>

          <Route path="/:id" render={props => <CountryDetails {...props} />} />
      
        </Switch>
    
    </div>

    

  );
}

export default App;
