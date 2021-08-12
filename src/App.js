import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { withRouter } from 'react-router';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "./Components/Navbar";
import CountriesLists from "./Components/CountrieLists";
import CountryDetails from "./Components/CountryDetails"

export default function App() {
  return (
    <div>
      <Nav />
      <div class="container">
        <div class="row">
          <CountriesLists />
          <Switch>
            <Route exact path="/country/:cca3" component={withRouter(CountryDetails)} />
          </Switch>
        </div>
      </div>
    </div>
  );
}