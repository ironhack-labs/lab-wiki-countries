import React from 'react';
import './App.css';
import { Route , NavLink, Switch} from 'react-router-dom';
import countries from './countries.json';
import CountryDetail from './components/CountryDetail';

const App = () => {
  
  return (
  
    <div className="App">
     <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
              {         
                countries.map((country,idx) => {
                  return (
                      <div key={idx} >
                         <NavLink className="list-group-item list-group-item-action" to={`/countrydetail/${country.cca3}`}>{country.flag} {country.name.common}</NavLink>
                      </div>
                )})
              }
            </div>
          </div>        
          <Switch>
            <Route exact path='/countrydetail/:id' component={CountryDetail} />
        </Switch>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
