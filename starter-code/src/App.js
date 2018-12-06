import React, { Component } from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail/CountryDetail.js'
import CountryInfo from './components/CountryInfo/CountryInfo.js'
import Countries from './countries.json'
import 'bootstrap/dist/css/bootstrap.css';
import './components/CountryDetail/CountryDetail.css';
import { Link, Switch, Route } from 'react-router-dom';

let CountriesList = Countries;

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      countries: CountriesList 

    }
  }
  
 
  render() {
    return (
      <div className="App">
      <div className="list-group">
      <a href="#" class="list-group-item list-group-item-action active fixed">Wiki Countries</a>
        <div className="block">
      <div>
          { this.state.countries.map((country,index) => 
          <CountryDetail key={index} flag={country.flag} link={country.cca3} name={country.name.official} className="list-group-item list-group-item-action width"/> 
          
          ) 
          }
      </div> 
      <div>
          <Switch>
            <Route exact path='/:id' component={CountryInfo}/>
          </Switch>
      </div> 
      </div> 
          </div>
      </div>
    );
  }
}

export default App;
