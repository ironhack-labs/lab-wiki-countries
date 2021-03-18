import React from "react";
import { Switch, Route } from "react-router-dom";
import countries from './countries.json'
import NavBar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import './App.css';

function App() {
  return (

    <div className="App">
      <NavBar />
      <Switch>
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Route 
              extra path='/:cca3' 
              component={CountryDetails} 
            />
            {/* React Router Route rendering the CountryDetails should go here */}
          </div>
        </div>
      </Switch>
    </div>
  );
}

export default App;
