import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';
import Error from './components/Error';

function App() {
  return (
    <div className="row">
      <Switch>
        <div className="row">
          <div className="col-5"><Route path="/" component={Countries} /></div>
          <div className="col-7"><Route path="/:id" component={CountryDetail} /></div>
      </div>
      </Switch>

    </div>
  );
}

export default App;
