import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      {/*El elemento Switch nos permite hacer el path con la primera ruta coincidente - El componente Route nos permite asociar un path con un componente
       */}

      <CountriesList />
      <Switch>
        <Route exact path="/:cca3" component={CountryDetail} />
      </Switch>
    </div>
  );
}

export default App;
