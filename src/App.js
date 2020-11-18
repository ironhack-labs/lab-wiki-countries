import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import countries from './countries.json';
import NavBar from './components/Navbar';

function App (){
  return(
    <div>
      <BrowserRouter>
        <NavBar>

        </NavBar>
        <div className="container">
          <div className="row">
            <CountriesList />
            <Switch>
              <Route path="/:country" component={CountryDetails} />
            </Switch>
          </div>
        </div> 
      </BrowserRouter>
      </div>
  )
}
  
    
  
    

export default App;
