import React, {Component} from 'react';
import './App.css';
import NavBar from '../src/components/navbar/Navbar'
import CountryDetails from '../src/components/countryDetails/CountryDetails';
import countries from './countries.json';
import { Route, Switch } from "react-router-dom";


class App extends Component {
 state = {
   country: undefined
 }

 handleClick = (id) => {
   this.setState({country:countries.filter((country)=>country.cca3=== id)[0]})
 }


render() {
  return (
    <div className="App">
    <NavBar countries={countries}  handleClick={this.handleClick}/>
    <Switch>        
    <Route
          exact
          path="/:id"
          render={(reactRouterProps) => (
            <CountryDetails {...reactRouterProps} country={this.state.country} handleClick={this.handleClick}  />
          )}
        />
    </Switch>
    </div>
  );
}
}

export default App;
