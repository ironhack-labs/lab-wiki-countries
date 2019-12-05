import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { ViewSingle } from './components/viewsingle';
import Countries from './countries.json';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>oh yea beetches</p>
          <div className="list">
            <ul>
              {Countries.map(country => {
                return (
                  <Link to={`/country/${country.cca3}`}>
                    <li>
                      <h5>{country.name.common} </h5>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </header>
        <Switch>
          <Route path="/country/:cca" component={ViewSingle} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
