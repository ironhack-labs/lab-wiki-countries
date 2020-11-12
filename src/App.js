import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import axios from 'axios'

class App extends Component {
  
  
  state = { countriess: [] };

  componentDidMount = async () => {
      const countriess = await axios.get("https://countries.tech-savvy.tech/countries")  
      this.setState({ countriess: countriess.data})
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container d-flex mr-5">
          
          <div class="col-5" style={{maxHeight: '90vh', overFlow: 'scroll'}}>
          <div className="row">
          <div class="list-group">
          <CountriesList countries={countries} />
          </div>
            <Switch>
              <Route
                exact
                path="/countries/:cca3"
                render={(props) => (
                  <CountryDetails {...props} countries={countries} />
                )}
              />
            </Switch>
           
            <div>
              {
                this.state.countriess && this.state.countriess.map((country, index) => (<h2 key={index}>{country.name.common}<span>{country.flag}</span></h2>) )
              }
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
