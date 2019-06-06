import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import { Switch, Route } from 'react-router-dom'
import CountryDetails from './components/CountryDetails'



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/country/:id" exact component={CountryDetails} />



        </Switch>

      </div>
    );
  }
}

export default App;
