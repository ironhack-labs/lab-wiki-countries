import React from 'react'
import './App.css';
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import NavBar from "./components/NavBar";
import countriesJSON from "../countries.json";
import { Route, Switch } from "react-router-dom";

class App extends React.Component{

  state ={
    countries :countriesJSON,
  }
  render() {
  return (
    <div className="App">
        <NavBar/>
       <div class="container">
         <div class="row">
      <CountriesList />
       <Switch>
       {/* <Route exact path="/" component={CountriesList}/> */}
       <Route exact path="/:cca3" component={CountryDetails}/>
       </Switch>
 </div>
  </div>
    </div>
  );}
}

export default App;
