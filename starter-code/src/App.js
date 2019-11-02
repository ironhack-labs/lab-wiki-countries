import React, { Component } from 'react';
import './App.css';
import Countries from './components/Countries';
import countries from "./countries.json";
import CountryDetail from './components/CountryDetail'
import { Route, Switch, Link } from "react-router-dom";



class App extends Component {

  render() {
    return (
      <div>

        <Switch>


          <Route exact path='/countries' component={Countries} />
          {/* Route component is responsible for passing props that 
        include the route parameters (in this case: 'id') */}
          <Route path='/countries/:cca3' component={CountryDetail} />
        </Switch>
        < Countries countries={countries} />
      </div >
    );
  }
}
export default App;
