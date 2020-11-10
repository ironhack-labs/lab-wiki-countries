import React from 'react';
import './App.css';

import axios from 'axios';

import NavBar from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    countries: [],
  }

  componentDidMount() {
    axios.get('https://countries.tech-savvy.tech/countries')
      .then((res) => {
        this.setState({countries: res.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="d-flex">
        <CountriesList countries={this.state.countries} />

        <Switch>
        <Route exact path='/detail/:country' render={(routeProps) => <CountryDetails {...routeProps} countries={this.state.countries} />}/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
