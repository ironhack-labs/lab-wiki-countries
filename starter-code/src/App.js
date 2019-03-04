import React, { Component } from 'react';
import Topbar from './components/Topbar';
import ListGroup from './components/ListGroup';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Topbar />
        </header>
        <div className="row">
          <div className="col-3 has-slider">
          <ListGroup />
          </div>
          <div className="col-9">
          <Switch>
            <Route exact path="/details/:cca3" component={CountryDetails} />
          </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
