import React from 'react';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom'

class App extends React.Component {

   state = {
      countries: countries
    }


  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
        <div className="row">
        <div className="col-sm">
        <CountriesList countries={this.state.countries} />
        </div>
        <div className="col-sm">
        <Route exact path="/country/:id" component={CountryDetails} />
        </div>
        </div>
        </div>
      </div>
    );
  }
 
}

export default App;
