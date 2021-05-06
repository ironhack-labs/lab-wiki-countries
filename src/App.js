import React from 'react';
import './App.css';
import countries  from "./countries.json";
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Link, Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    this.setState({
      countries: countries
    })
  } 
  render() {
      return (
    <>
      <div className="App">
      <Navbar />
      </div>
      <div>
        <CountriesList />
          <Switch>
             <Route exact path="/country/:id" component={CountryDetails} />
          </Switch>
      </div>
    </>
  );}
}


