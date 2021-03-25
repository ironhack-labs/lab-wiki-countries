import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import { NavBar } from './Components/NavBar';
import { CountriesList } from './Components/CountriesList';
import { CountryDetails } from './Components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
state = {
  countries: [],
}

componentDidMount = () => {
  this.setState({
    countries: countries
  })
}

  render() {
    const { countries } = this.state;
    
    return (
      <div className="App">
        <NavBar />
        <div className='container'>
          <div className='row'>
            <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll", marginTop: '20px' }}>
              <CountriesList countries={countries} />
            </div>
            <div className='country-details' style={{marginLeft: '50px'}}>
              <Switch>
                <Route
                  exat path='/countries/:id'
                  render={(props) => {
                    return <CountryDetails {...props} countries={countries} />
                  }} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}


