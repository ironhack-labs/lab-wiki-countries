import React, { Component } from 'react';
import './App.css';

import countries from './countries.json';
import CountryDetails from './components/CountryDetails';
import {Switch, Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      countriesList: countries
    }
  }
  render() {
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
              <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                <div className="list-group">
                  {
                    this.state.countriesList.map(item => {
                      return  <Link key={item.cca3} className="list-group-item list-group-item-action" to={`/${item.cca3}`}>{item.flag} {item.name.official}</Link>
                    })
                  }
               

                </div>
              </div>
              <Switch>
                {/* <Route exact path='' component={ App } /> */}
                <Route exact path='/:id' component={ CountryDetails } />
              </Switch>
              
            </div>
          </div>
        </div>

   
      </div>
    );
  }
}

export default App;
