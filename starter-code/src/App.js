import React, { Component } from 'react';
import './App.css';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Link, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                {
                  countries.map((country) => {
                    return <Link className="list-group-item list-group-item-action" to={`/${country.cca3}`}>{country.flag}{country.name.official}</Link>
                  })
                }
              </div>
            </div>
            <div className="col-7">
             <Switch>
              <Route path='/:id' component={CountryDetails} />
             </Switch> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
