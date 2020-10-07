import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import axios from 'axios';
// import countries from './countries.json'

class App extends Component {
  state = {
    countries: []
  }

  componentDidMount = () => {
    axios.get("https://countries.tech-savvy.tech/countries")
      .then(response => {
        this.setState({ countries: response.data })
      })
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <div className="row">

          <div className="col-md-6">
            <CountriesList countries={this.state.countries} />
          </div>

          <div className="col-md-6">
            <Switch>
              {/* <Route exact path='/countries/:cca3' component={CountryDetails} /> */}
              {/* if you need to pass a prop to a component being rendered by React Router v4, instead of using Routes component prop, use its render prop. */}
              <Route path='/countries/:cca3' render={(props) => (<CountryDetails {...props} countries={this.state.countries} />)}/>
            </Switch>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

