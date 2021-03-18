import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';


function App() {


  return (
    <div className="App">
      <NavBar />
      <div style={{display:"flex", flexDirection:"row"}}>
      <CountriesList/>
      <Switch>
      <Route path="/:ccn3"
          render={(historyProps) => {
            return <CountryDetails {...historyProps} />;
          }} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
