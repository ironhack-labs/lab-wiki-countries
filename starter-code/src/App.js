import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import Navbar from "./components/Navbar.js";
import CountryList from "./components/CountryList.js";
import CountryDetail from "./components/CountryDetail.js"
import { Route } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="col-4">

              {
                countries.map((oneCountry, index) => {
                  return <CountryList key={countries.cca3} {...oneCountry} />
                })
              }


            </div>
            <div className="col-8"> <Route exact path="/:id" component={CountryDetail} /> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
