import React from 'react';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import NavBar from './components/NavBar/NavBar';
import "./App.css";
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route exact path="/:cca3" component={CountryDetails}></Route>
          </Switch>

        </div>
      </div>
    </div>
  )
}

export default App;

