import React, { Component } from 'react';
import countries from './countries.json';
import CountryDetail from './components/CountryDetail';
import { Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-light bg-primary ">
       <span className="navbar-brand ml-5 text-white h1">WikiCountries</span>
      </nav>
      <Switch>
      <Route path={`/:id`} component={CountryDetail}/>
      </Switch>
      <div className="container">
        <div className="row">
          <div className="col-5 column-countries">
          
            {countries.map((country,i)=>(
              <div >
              <Link to={`/${country.cca3}`} key={i}>{country.name.common}</Link>
              </div>
            ))}
          </div>
         
        </div>
      </div>
     
      </div>
    );
  }
}

export default App;
