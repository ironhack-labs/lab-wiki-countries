import React, { Component } from "react";
import data from "./countries.json"
import './App.css';
import CountryDetail from './components/CountryDetail'
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    country: data
  }
  
   malo = () =>{
  console.log(this.state.country)
  }
  render() {

      return(
          <div className='App'>
              <Switch>
                <Route exact path='/' render={(props)=> <CountryDetail {...props} country={this.state.country}/> }/>
              </Switch>
          </div>
      );
  }
}

export default App;


