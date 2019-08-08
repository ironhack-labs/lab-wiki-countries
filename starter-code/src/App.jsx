import React, { Component } from 'react';
import {Route} from "react-router-dom";

import Nav from "./components/Nav.jsx";
import CountriesMenu from "./components/CountriesMenu.jsx";
import CountryDetail from "./components/CountryDetail.jsx";
import Home from "./components/Home.jsx";


class App extends Component {
  render() {
    return (
      <div>

        <Nav />

        <div className="container">
          <div className="row">

            <CountriesMenu />
            
            <Route exact path="/" component={Home} />
            <Route path="/country/:cca3" component={CountryDetail} />

          </div>
        </div>

      </div>
    );
  }
}

export default App;
