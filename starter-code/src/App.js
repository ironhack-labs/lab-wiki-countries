import React, {Component} from 'react';
import './App.css';
import Country from './components/Country';
import CountryDetail from './components/CountryDetail';
import countries from './countries.json';
import {  Route } from 'react-router-dom';

class App extends Component {

  render() {
    const Colstyle = {
      'max-height': '90vh',
      overflow: 'scroll',
    };
    const ContainerCont = {
      'display': 'flex'
    }
    return (
      <div className="App">
        <h1>WikiCountries</h1>
        <div style={ContainerCont}>
          <div className="container">
            <div className="row">
              <div className="col-6" style={Colstyle}>
                <div class="list-group">
                  {countries.map((country, index) => (
                    <Country
                      key={index}
                      cca3={country.cca3}
                      name={country.name.common}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Route path="/country-detail/:cca3" component={CountryDetail} />
        </div>
      </div>
    );
  }
}

export default App;