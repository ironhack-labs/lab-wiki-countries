import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={CountriesList} />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/:id"
            render={(props) => <CountryDetail {...props} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
