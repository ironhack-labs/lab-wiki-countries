import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countries from './countries.json';

class App extends React.Component {
   render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
          <Switch>
            <Route path="/" component={CountriesList} exact />
            <Route path="/:id" component={CountryDetails} exact />
            <Route component={Error} />
        </Switch>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
