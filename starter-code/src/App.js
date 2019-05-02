import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CountryDetail from './CountryDetail';
import countries from './countries.json'
import Navbar from './components/navbar/Navbar';
import './App.css';
import {Link} from 'react-router-dom'

class App extends Component {
  state = {
    countries : [...countries]
  }
  
  render() {
    let countries = this.state.countries.map((country, i) => {
      return <Link key={i} className="list-group-item list-group-item-action" to={country.cca3}>{country.flag} {country.name.common}</Link>
    });

    const divStyle = {
      maxHeight: '90vh', 
      overflow: 'scroll'
    }

    return (
    <React.Fragment>
      <div id="root">
        <div>
          <Navbar></Navbar>
          <div className="container">
            <div className="row">
              <div className="col-5" style={divStyle}>
                <div className="list-group">
                  {countries}
                </div>
              </div>
              <Switch>
                <Route exact path='/:cca3' component={CountryDetail} />
              </Switch> 
            </div>
          </div>
        </div>
      </div> 
    </React.Fragment>
    );
  }
}

export default App;
