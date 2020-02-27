import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from "./CountryDetail";
import countries from "./countries.json";
import { Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";
function App() {


  return (
  <div className="App">
  <div id="root"></div>
     

   

   <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>

      <div className="row">
    <Switch>
      <Route exact path="/country" render={()=> <CountryDetail/>}/>
    </Switch>
  <div class="col-5"></div>
  <div class="col-7"></div>


<div class="list-group">
   <Link to ="./country"class="list-group-item list-group-item-action">{CountryDetail.cca3}{CountryDetail.name.common}</Link>
  <a href="#" class="list-group-item list-group-item-action">Hola soy un país😬</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
 
    </div>
    </div>
   
    
  );

}

export default App;
