import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { CountryDetail } from "./components/CountryDetail";
import { Link } from "react-router-dom";
import countries from "./countries.json";


function App() {

  const countriesList = countries;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries Wiki</h1>{" "}
        <div className="list-group">
        {countriesList.map(e => <Link to={`/${e.cca3}`} key={e.cca3} className="list-group-item list-group-item-action"> {e.name.common} </Link> )}
        </div>
        
          <Route path="/:cca3" component={CountryDetail} />
        
      </header>
    </div>
  );
}

export default App;
