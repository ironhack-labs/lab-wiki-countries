import React, { Component } from 'react';

import countriesFile from './countries.json'

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

import './App.css';

class App extends Component {
  // Iteration 1 & Iteration 2
  // state = {
  //   countriesList: countriesFile,
  // };

  // Iteration 3
  state = {
    countriesList: [],
  };

  // Iteration 3
  componentDidMount = () => {
    console.log('hola')
    this.setState({ countriesList: countriesFile })
  }

  render() {
    const { countriesList } = this.state;

    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">

            <CountriesList countriesData={ countriesList } />

            <Switch>
            <Route path="/:cca3Code" render={(rrdProps) => {
                  return (
                    <CountryDetails {...rrdProps} countriesData={countriesList} />
                  );
                }}
              />
            </Switch>

          </div>
        </div>

      </div>
    )
  }
}

export default App;