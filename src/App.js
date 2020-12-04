import React, {Component} from 'react';
import './App.css';
import NavBar from '../src/components/navbar/Navbar'
import CountryDetails from '../src/components/countryDetails/CountryDetails';
import countries from './countries.json';
import { Route, Switch } from "react-router-dom";

class App extends Component {
 state = {
   country: {}
 }

 handleClick = (country) => {
   this.setState({country:country})
   console.log(this.state.country)
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
            <CountryDetails {...reactRouterProps} country={this.state.country} />
          )}
        />
    </Switch>
    </div>
  );
}
}

export default App;
