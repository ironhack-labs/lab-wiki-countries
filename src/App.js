import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <Switch>
        <Route
          path="/countries/:cca3" 
          // render={(historyProps) => {
          //   return <CountryDetails {...historyProps} />;
          // }}
           component={CountryDetails}
        />
      </Switch>
    </div>
  );
}

export default App;
