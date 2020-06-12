import React from 'react';
import './App.css';
import CountriesList from './Components/CountriesList';
import CountryDetail from './Components/CountryDetail';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="display-3 my-4 sticky-top bg-white">COUNTRY APP</div>
          <hr />
          <Switch>
            <Route exact path="/" component={CountriesList} />
            <div className="row align-content-center">
              <div className="col">
                <Route path="/countries" component={CountriesList} />
              </div>
              <div className="col">
                <Route path="/countries/:id" component={CountryDetail} />
              </div>
            </div>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
