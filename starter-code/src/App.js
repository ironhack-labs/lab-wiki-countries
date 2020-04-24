import React, { Component } from 'react';
import CountryDetails from './components/CountryDetail';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries.json';
import { Link } from "react-router-dom";



class App extends Component {

  state = {
      listCountries: countries,
    }

  render() {
    return (
      <div className="App">
        <div id="root">
            <div>
              <nav class="navbar navbar-dark bg-primary mb-3">
                <div class="container">
                  <Link class="navbar-brand" to="/">WikiCountries</Link>
                </div>
              </nav>
              <div class="container">
                <div class="row">
                  <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                    <div class="list-group">
                      { this.state.listCountries.map((info, i) => 
                        <Link to={info.cca3} key={i} className="list-group-item list-group-item-action">
                          {info.flag} {info.name.common}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
