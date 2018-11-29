import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";

import CountryDetail from "./components/CountryDetail.js"

import countriesList from "./countries.json";

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      country: countriesList,
    }
  }

  render() {

    const { country } = this.state;

    return (
        
        <div className="row">

          <div className="col-5 biglist">
            <div className="list-group">
              {country.map(oneCountry => {
                  return (
                    <Link to={`/${oneCountry.cca3}`}  className="list-group-item list-group-item-action">
                      {oneCountry.flag} {oneCountry.name.common}                        
                    </Link>
                  )
              })}
        </div>
      </div>

          <div className="col-7">
            <Switch>
              <Route path="/:cca3" component = {CountryDetail} />
            </Switch>
          </div>

      </div>
    );
  }
}

export default App;
