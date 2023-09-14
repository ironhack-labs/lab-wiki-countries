import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from '/';
import CountryDetailsPage from '/:countryId';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:countryId" component={CountryDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

