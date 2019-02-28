import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Contries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import { Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
        <div className="App">
          <NavBar/>
          <div className="row">
          <Contries/>
          <Switch>
            <Route exact path= '/pais/:id' component={CountryDetails}/>
          </Switch>
          </div>
        </div>
      
    );
  }
}

export default App;
