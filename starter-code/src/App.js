import React, { Component } from 'react';
import countries from './countries.json'
import { Link } from 'react-router-dom'
import Country from './components/Country'
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
    <div class="container">
        <div class="row">
          <div class="col-5" style={{maxHeight: `90vh`, overflow: `scroll`}}>
            <div class="list-group">
            {
              countries.map((elm,id) => <Link key={id} class="list-group-item list-group-item-action" to={`/${elm.cca3}`}>{elm.flag} - {elm.name.common}</Link>)
            }
            </div>
          </div>
          <Switch>
            <Route exact path='/:id' component={Country} />
          </Switch>
        </div>
      </div>

    );
  }
}

export default App;
