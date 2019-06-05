import React, { Component } from 'react';
import CountryDetail from './components/CountryDetail';
import Header from './components/Header';
import countries from './countries.json';
import { Switch, Route, NavLink } from 'react-router-dom';

class App extends Component {
  
  
  render() {
    let styles = {
      'maxHeight': '90vh', 
      'overflow': 'scroll'
    };

    const list = countries.map( (country, i) => 
      (
        <NavLink 
          key={i} 
          className="list-group-item list-group-item-action"
          activeClassName="active"
          to={`/${country.cca3}`}>
            {country.flag} {country.name.official}
        </NavLink>
    ))

    return (
      <div>
        <Header title="WikiCountries" />
                 
        <div className="container">
          <div className="row">
            
            <div className="col-5" style={styles}>
              <div className="list-group">
                {list}
              </div>
            </div>
            
            <div className="col-7">
              <Switch>
                <Route exact path='/:id' component={CountryDetail}/>
              </Switch>  
            </div>
          
          </div>
        </div>

      </div>
    );
  }
}

export default App;
