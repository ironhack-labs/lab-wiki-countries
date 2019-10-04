import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Details from './Details';
import countries from './countries.json'
import { Switch, Route } from 'react-router-dom';




class App extends Component {

  state = {
     countriesList:countries
  }



  render() {
    return (
      <div className="App">
         <Home/>
       

        <Switch>
         <Route path='/:id' render={(props) => <Details {...props} data={this.state.countriesList} />} />
        </Switch>
       

      </div>
    );
  }
}

export default App;