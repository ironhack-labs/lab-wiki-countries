import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="app">
        <div>
          <CountriesList />
        </div>
        <div>
          <Switch>
            <Route
              path="/countries/:name"
              render={(historyProps) => {
                return <CountryDetails {...historyProps} />;
              }}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
