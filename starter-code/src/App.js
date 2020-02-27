import React from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail'
import { Route } from 'react-router-dom';
import Country from './components/Country';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="row">
      <div class='col-3'>
        <Country />
      </div>
      <div class='col-9'>
      <Route exact path="/countries/:countryId" component={CountryDetail}/>
      </div>
    </div>
  );
}

export default App;
