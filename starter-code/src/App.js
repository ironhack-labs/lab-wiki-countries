import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CountryDetail from './components/CountryDetail';
import CountryList from './components/CountryList';

import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="row">
          <div className="col-5">
              <CountryList/>
          </div>
          <div className="col-7">
            <Switch>
                <Route exact path="/countryList" component={CountryList}></Route>
                <Route exact path="/countryList/:cca3" component={CountryDetail}></Route>
              </Switch>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
