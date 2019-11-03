import React, { Component } from 'react';
import countries from './countries.json';
import Country from './Components/Country';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './Components/CountryDetail.jsx';
class App extends Component  {

  state = {
    countries: [],
  }

  componentWillMount() {
    this.setState({countries: countries});
  }


  render() {
    const { countries } = this.state;

    return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
              {
                countries.map((country) => {
                  return (
                    <Country key={country.cca3} country={country}/>
                  )
                })
              }
            </div>
          </div>
          <Switch>
            <Route exact path='/:id' render={(props) => <CountryDetail {...props} countries={this.state.countries} />} />
          </Switch>
        </div>
      </div>
    </div>
    );
  } 
}

export default App;
