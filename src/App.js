import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./components/Navbar/Navbar"
import CountryList from "./components/CountryList/CountryList"
import CountriesDetails from "./components/CountriesDetails/CountriesDetails"
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CountryList></CountryList>
      <Switch>
              <Route exact path="/:id" render={(props) => <CountriesDetails  {...props} />} />
            </Switch>

    </div>
  );
}

export default App;
