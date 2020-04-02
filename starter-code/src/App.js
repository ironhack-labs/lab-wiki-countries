import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import Navbar from './components/Navbar';
import { Countries } from './components/Countries';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <div className="row">
          <div className="col-4">
            <Route path="/" component={Countries} />
          </div>
          <div className="col-8">
            <Route path="/:cca3" component={CountryDetail} />
          </div>

        </div>
      </Switch>
    </div>
  );
}

export default App;
