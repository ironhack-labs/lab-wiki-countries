import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import countryData from './countries.json'
import { Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component {
  //Question: in the case of this lab, the state and componentDidMount
  //does not really do anything. What is the purpose?
  state = {
    countries: countryData 
  }

  componentDidMount() {
    console.log(countryData);
  }

  render() {
  return (
   <div>
  <Navbar />
  <p><CountriesList /></p>
  <Route exact path="/:cca3" component={CountryDetails}></Route>
  </div>
  );
}
}

export default App;
