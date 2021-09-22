import './App.css';
import React from "react";
import { Switch, Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails'
import countriesList from './countries.json'

class App extends React.Component {

  state = {
    countries: []
  }

  componentDidMount() {
    
    this.setState({
      ...this.state,
      countries: countriesList
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countriesList}/>
            <Switch>
              <Route path="/:cca3" render={(props) => <CountryDetails {...props} />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
