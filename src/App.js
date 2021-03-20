import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';

import countriesData from './countries.json';

import Home from './components/Home';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';


class App extends React.Component {
  state = {
    countries: [...countriesData],
  };

  render() {
    return (


    <div>
      <Navbar />
      <div className="container">
      <div className="row">
      <CountriesList countries={this.state.countries} />
 <Switch>
   {/* <Route exact path='/' render={ () =>  <CountriesList countries={this.state.countries}/> } /> */}
   <Route path='/CountryDetails/:id' component={CountryDetails}/>
 </Switch>
    </div>
    </div>
    </div>
   );
  }
}
export default App;
