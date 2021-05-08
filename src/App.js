import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import CountriesService from './services/countries.service';

class App extends React.Component {
  state = {
    countries: [],
  };
  
  countriesService = new CountriesService();
  
  refreshState() {
    this.countriesService.get()
    .then(response => {
      this.setState({ countries: response.data });
      console.log(this.state)
    })
    .catch(err => console.error(err));
  }

  componentDidMount() {
    this.refreshState();    
  }

  render() {
    if (this.state.countries) {
      const { countries } = this.state
      return (
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-5">
                <CountriesList refreshState={() => this.refreshState()} countries={this.state.countries} />
              </div>
              <div className="col-7">
                <Switch>
                  <Route exact path="/:id" render={(props) => <CountryDetails refreshState={() => this.refreshState()} countries={this.state.countries} {...props} />}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
