import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail';
import  countries  from './countries.json';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';



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
          <div className="col-5" style={{maxHeight: 90 + "vh", overflow: "scroll"}}>
            <div className="list-group">
            {countries.map((country, idx) => {
              return  <Link to={"/" + country.cca3} key={idx} className="list-group-item list-group-item-action" href="/ABW" {...country}> {country.flag} {country.name.common}</Link>
            })}
    
            </div>
          </div>
          <Switch>
          <Route exact path='/:cca3' component={CountryDetail}/>
        </Switch>

        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
