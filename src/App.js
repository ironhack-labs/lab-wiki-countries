import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <Switch>
        <Route
          path="/countries/:cca3"
          render={(historyProps) => {
            return <CountryDetails {...historyProps} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
