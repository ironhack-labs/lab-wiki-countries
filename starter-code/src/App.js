import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import CountryDetail from './components/CountryDetail/CountryDetail';
import CountryInfo from './components/CountryInfo/CountryInfo';
import 'bootstrap/dist/css/bootstrap.css';
import './components/CountryDetail/CountryDetail.css';
import { Link, Switch, Route } from 'react-router-dom';

let list = []
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countries: list
    }
  }

  render() {
    return (

      <div className="App">
        <nav>
          <h1>WikiCountries</h1>
        </nav>
        {countries.map((country, index) =>
          <Link to={country.cca3}><CountryDetail key={index} flag={country.flag} name={country.name} cca3={country.cca3} className="list-group-item list-group-item-action" />
          </Link>)}
      
    
      <Switch>
        <Route exact path='/:id' component={CountryInfo}/>
      </Switch>
     
      </div>

    );
  }
}

export default App;
