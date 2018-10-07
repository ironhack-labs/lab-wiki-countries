import React from "react";
import { Switch, Route } from 'react-router-dom';
import CountriesList from "./CountriesList";
import CountryDetails from "./CountryDetails"


export default class App extends React.Component {

  render() {
    return (
      <div>
        <div>
          <h1 className="container-fluid fixed-top" style={{color: "white", backgroundColor: "#00B1E1"}}>WikiCountries</h1>
        </div>
        <div className="row" style={{marginTop: 50}}>
          <div className="col-5" style={{overflow: "scroll", height: "100%"}}>
              <CountriesList/>
          </div>
          <div className="col-7">
            <Switch>
              <Route path="/:cca3" component={CountryDetails}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
