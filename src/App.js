import React from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import NavBar from './Components/Navbar'
import CountriesList from './Components/CountriesList'
import CountryDetails from './Components/CountryDetails'
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countries:countries
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
            <div className="row">
              <CountriesList countriesList={this.state.countries} />
              <Switch>
                <Route path="/:countryCode" render={ props => {
                  return <CountryDetails {...props} countriesList={this.state.countries} />
                }}/>
              </Switch>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
