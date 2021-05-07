import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Link, Switch, Route, Redirect } from "react-router-dom";
import axios from 'axios';


class App extends React.Component {
  state={
    countries:[]
  }

  componentDidMount(){
  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then((result) => {
      console.log(result.data)
      this.setState({ ...this.state, countries: [...result.data] });
    })
    .catch((err) => {
      console.log(err);
    });
  }
  render(){
    
  return (

    <div className="App">
     <Navbar />
    <div className="container">
    <div className="row">
     <CountriesList list= {this.state.countries}/>
    <Switch>
      <Route path={`/countries/:country`} component={routeProps => <CountryDetails {...routeProps} countries={this.state.countries}/>} />
    </Switch>
     </div>
     </div>
    </div>
  );}
}

export default App;
