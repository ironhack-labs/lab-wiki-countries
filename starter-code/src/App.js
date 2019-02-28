import React, { Component } from 'react';
import './App.css';
import Country from "./components/country"
import CountryDetail from "./components/countryDetail"
import { Switch, Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
        <h5 className="Principal">WikiCountries</h5>
        <div className="container">
          <div className="row">
            <div className="Container col-5">
              <Country  />  
            </div>  
            <div className="col-7">
            <Switch>
              <Route exact path= "/countryDetail/:idCountry" component={CountryDetail}/>
            </Switch>
            </div>
          </div>          
        </div>             
      </div>
    );
  }
}

export default App;
