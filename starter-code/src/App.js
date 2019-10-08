import React from 'react';
import {Link} from "react-router-dom"
import { Switch, Route } from 'react-router-dom';
import countries from "./countries.json"
import './App.css';

import Navbar from './components/Navbar';
import NavigationColumn from './components/NavigationColumn';
import CountryDetails from './components/CountryDetails.js';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Navbar/>
        <div id = "content-wrapper">
          <NavigationColumn countries = {countries} />
          <Switch>
            <Route exact path = "/:CCA3" component = {CountryDetails}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
