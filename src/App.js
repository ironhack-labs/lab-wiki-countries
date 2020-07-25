import React from 'react';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import CountriesList from './components/countries/CountriesList';
import CountryDetail from './components/countries/CountryDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route path="/:country" component={CountryDetail}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
