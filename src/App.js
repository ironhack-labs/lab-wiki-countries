import React, { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import countries from './countries.json'
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: countries

    };
  }

  componentDidMount = () => {
    this.setState({
      countries: countries
    })

  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">

            <CountriesList countries={countries} />
            <Switch>
              <Route path="/:cca3" render={(props) => <CountriesDetails countries={this.state.countries} {...props} />}></Route>
            </Switch>

          </div>
        </div>
      </div>

    );
  }

}

export default App;
