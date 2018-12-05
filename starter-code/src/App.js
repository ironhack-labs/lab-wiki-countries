import React, { Component } from 'react';
import './App.css';
import Countries from "./countries.json";
import Country from "./Components/Country/Country.jsx";
import CountryDetail from "./Components/CountryDetail/CountryDetail.jsx";
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3"><div class="container">
          <Link to="/" className="navbar-brand" href="/"><h3>WikiCountries</h3></Link>
        </div>
        </nav>
        <div className="row">
          <div className="col-5" style={{maxHeight: "90vh",overflow: "scroll"}}>
            {Countries.map((country, index) => {
              return <Link to={`/${country.cca3}`}><Country {...country} /></Link>
            })}
          </div>
          <div className="col-7">
            <Switch>
              <Route exact path="/:cca3" component={CountryDetail}></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
