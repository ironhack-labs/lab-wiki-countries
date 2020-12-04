import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesDetails from "./components/CountriesDetails"
import CountriesList from './components/CountriesList';
import countries from './countries.json'
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {
  render() {
  return (
    <div className="App">
      
        <Navbar/>
        <CountriesList countries={countries}/>
        <Switch>
          <Route
          exact path="/:cca3"
          render={(routeProps)=>(
            <CountriesDetails {...routeProps} countries={countries}/>
          )}
            />
        </Switch>
    </div>
  );
}

}

export default App;