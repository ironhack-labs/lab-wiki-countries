import {Route, Switch} from "react-router";
import { Link, NavLink } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
import CountryDetails from "./components/CountryDetails"
import CountryList from "./components/CountriesList"
import Countries from "./countries.json"
import React from 'react'


class App extends React.Component{
  
  state = {

    countries : Countries
  }
  render(){

  return (

    <div className="App">
      <NavBar></NavBar>

      {/* <CountryList/> */}
      <Switch>
            <Route path="/CountryDetails/:id" component={CountryDetails} />
      </Switch>
    </div>
  );
  }
}

export default App;
