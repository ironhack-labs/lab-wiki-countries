import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import Country from './views/Country/Country';
import countries from './countries.json';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Main countries={countries} />
      </Route>
      <Route exact path="/:countryId">
        <Country countries={countries} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
