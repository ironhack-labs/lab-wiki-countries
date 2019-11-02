import React, { Component} from 'react';
import countries from './countries.json';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import CountryDetail from './components/CountryDetail';

class App extends Component {
  state = {
    allCountries : countries,
  }
  render(){
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div >
              <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {this.state.allCountries.map((country,index)=>{
                return(
                  <div key={index}>
                      <Link to={`/countryDetail/${country.cca3}`} className="list-group-item list-group-item-action" >{country.flag} {country.name.common}</Link>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-7">
            <Switch>
              <Route 
                path='/countryDetail/:id' 
                component={(props)=> <CountryDetail {...props} list={this.state.allCountries}/>} 
              />
            </Switch>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
