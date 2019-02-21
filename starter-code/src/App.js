import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {

    console.log('countries', countries[0])
    return (
      <div className='App'>
        <div className="container d-flex" >
          <div className="row" id="countryList">
            <div className="col">
              <div className="row">

                <div className="list-group">
                  <a className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
                  <a className="list-group-item list-group-item-action" href="/AFG">🇦🇫 Afghanistan</a>
                  <a className="list-group-item list-group-item-action" href="/AGO">🇦🇴 Angola</a>
                  <a className="list-group-item list-group-item-action" href="/AIA">🇦🇮 Anguilla</a>
                  <a className="list-group-item list-group-item-action" href="/ALA">🇦🇽 Åland Islands</a>
                  <a className="list-group-item list-group-item-action" href="/ALB">🇦🇱 Albania</a>
                  <a className="list-group-item list-group-item-action" href="/AND">🇦🇩 Andorra</a>
                  <a className="list-group-item list-group-item-action" href="/ARE">🇦🇪 United Arab Emirates</a>
                  <a className="list-group-item list-group-item-action" href="/ARG">🇦🇷 Argentina</a>
                  <a className="list-group-item list-group-item-action" href="/ARM">🇦🇲 Armenia</a>
                  <a className="list-group-item list-group-item-action" href="/ASM">🇦🇸 American Samoa</a>
                  <a className="list-group-item list-group-item-action" href="/ATA">🇦🇶 Antarctica</a>
                  <a className="list-group-item list-group-item-action" href="/FLK">🇫🇰 Falkland Islands</a>
                  <a className="list-group-item list-group-item-action active" href="/FRA">🇫🇷 France</a>
                  <a className="list-group-item list-group-item-action" href="/ZWE">🇿🇼 Zimbabwe</a>
                </div>
              </div>

            </div>
          </div>
          <div className="col">
            <div className="container">
              <Switch>
                <Route exact path="/:cca3" component={CountryDetails} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
