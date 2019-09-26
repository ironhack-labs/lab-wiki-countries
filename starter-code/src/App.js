import React from 'react';
import { Route, Switch,Link } from "react-router-dom";
import CountryDetails from "./CountryDetail"
import './App.css';
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
       <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <Link class="navbar-brand" to="/">WikiCountries</Link>
        </div>
      </nav>
     
      <div class="container">
        <div class="row">
          <div class="col-5" style={{maxHeight: "90vh", overFlow: "scroll"}}>
            <div class="list-group">
              <Link class="list-group-item list-group-item-action" to="/ABW">🇦🇼 Aruba</Link>
              <Link class="list-group-item list-group-item-action" to="/AFG">🇦🇫 Afghanistan</Link>
              <Link class="list-group-item list-group-item-action" to="/AGO">🇦🇴 Angola</Link>
              <Link class="list-group-item list-group-item-action" to="/AIA">🇦🇮 Anguilla</Link>
              <Link class="list-group-item list-group-item-action" to="/ALA">🇦🇽 Åland Islands</Link>
              <Link class="list-group-item list-group-item-action" to="/ALB">🇦🇱 Albania</Link>
              <Link class="list-group-item list-group-item-action" to="/AND">🇦🇩 Andorra</Link>
              <Link class="list-group-item list-group-item-action" to="/ARE">🇦🇪 United Arab Emirates</Link>
              <Link class="list-group-item list-group-item-action" to="/ARG">🇦🇷 Argentina</Link>
              <Link class="list-group-item list-group-item-action" to="/ARM">🇦🇲 Armenia</Link>
              <Link class="list-group-item list-group-item-action" to="/ASM">🇦🇸 American Samoa</Link>
              <Link class="list-group-item list-group-item-action" to="/ATA">🇦🇶 Antarctica</Link>
              <Link class="list-group-item list-group-item-action" to="/FLK">🇫🇰 Falkland Islands</Link>
              <Link class="list-group-item list-group-item-action" to="/FRA">🇫🇷 France</Link>
              <Link class="list-group-item list-group-item-action" to="/ZWE">🇿🇼 Zimbabwe</Link>
            </div>

          </div>
          <Route exact path="/:country" component={CountryDetails} />

        </div>
      </div>
    </div>
  
  );
}

export default App;
