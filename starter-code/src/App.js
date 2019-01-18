import React, { Component } from 'react';
import './App.css';
import { Search }  from './components/Search';
import { Countries }  from './components/Countries';
import { Initial }  from './components/Initial';
import { Switch, Route } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>WIKI COUNTRIES</h1>
        <div class="row">
          <div class="col-5"><Search /></div>
          <div class="col-7">

            <Switch>
              <Route exact path="/" component={Initial} />
              <Route exact path='/:cca3' component={Countries} />
            </Switch>
          
          </div>
          </div>
      </div>
    );
  }
}

export default App;
