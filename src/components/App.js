import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import CountriesList from "./CountriesList/CountriesList";
import CountryDetails from "./CountryDetails/CountryDetails";



import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route
              path="/:cca3"
              render={(props) => <CountryDetails {...props} />}
            />
          </Switch>
        </div>
      </div>
      {/* <Route path="/:cca3" render={(props) => <CountryDetails {...props} />} /> */}
    </>
  );
}

export default App;
