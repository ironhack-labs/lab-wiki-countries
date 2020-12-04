import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Route, Switch } from "react-router-dom";

function App() {

  const NotFound = () => {
    return <h1>404 Not Found 🙃</h1>
  }

  return (
    <div className='App' >
      <Navbar />
        <div className="container">
          <div className="row">
            
            <CountriesList countries = { countries } />
            <Switch>
                <Route exact path="/:id" component = { CountryDetails } />
                <Route component={NotFound} />
            </Switch>

        </div>
      </div>
    </div>
  );
}

export default App;
