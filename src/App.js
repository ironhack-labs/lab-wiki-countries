// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import { Component } from 'react';
// import countriesDataJSON from './countries.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList component={CountriesList} />
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={CountriesList} />
          <Route exact path="/:cca3" component={CountryDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
