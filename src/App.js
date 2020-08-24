import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./components/Navbar"
import CountryList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CountryList></CountryList>
      <Switch>
        <Route exact path="/:id" render={(props) => <CountryDetails  {...props} />} />
      </Switch>

    </div>
  );
}

export default App;