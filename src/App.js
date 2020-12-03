import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {

  state = {
    countriesArray: []
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <div className="row">
              <CountriesList countries={this.state.countriesArray} />
              <Switch>
                <Route exact path="/countrydetails/:countryid" component={CountryDetails} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }

  componentDidMount() {
    this.setState({ countriesArray: countries })
  }

}

export default App;
