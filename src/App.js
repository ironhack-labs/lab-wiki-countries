import {  Route, Switch } from 'react-router-dom';
import React from "react";
import Navbar from '././components/Navbar/Navbar' 
import CountriesLists from './components/CountriesList/CountriesList'; 
import countriesList from './countries.json' 
import CountryDetails from './components/CountryDetails/CountryDetails'


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
            <CountriesLists countries={countriesList} />
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
