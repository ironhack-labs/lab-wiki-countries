import React, { Component } from 'react';
import './App.css';

import countries from './countries.json'
import { NavLink } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';

import CountryDetail from './components/CountryDetail';

class App extends Component {

  constructor () {
    super()
    this.state = {
      listOfCountries: countries

    }
  }

  render() {
    return (
      <div>
        <div className="wikicountries">
          <h3>WikiCountries</h3>
        </div>  
        <div className="container main-div">
        <div className="row">
          <div className="col-5">
              <nav>
                <ul>
                  {
                    this.state.listOfCountries.map((elm, idx) => {
                      return (
                        <li key={idx}><NavLink to={`/${elm.cca3}`}><i>{elm.flag}</i>{elm.name.common}</NavLink></li>
                      ) 
                    })
                  }
                </ul>
              </nav>
          </div>
         
            <Switch>

              <Route exact path="/:cca3" component={CountryDetail}/>  

            </Switch>

         
        </div>
       </div>
      </div>
    );
  }
}

export default App;
