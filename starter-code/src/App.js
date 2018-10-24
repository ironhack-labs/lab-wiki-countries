import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './countries.json'
import CountryDetail from './countrydetail'
import { Switch, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      country : data
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.country.map( (element, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-5" ><Link to={`/country/${element.cca3}`}>{element.name.official}</Link></div>
              </div>
            )
          })
        }
        <Switch >
          <Route exact path='/country/:id' component={CountryDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
