import React from 'react';
import CountryCard from './components/CountryCard';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './pages/CountryDetail';

import countries from './countries.json';
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-5 text-left" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            {countries.map((country, idx) => (
              <CountryCard
                key={idx}
                name={country.name.common}
                code1={country.cca3}
                code2={country.cca2}
              />
            ))}
          </div>
          <Switch>
            <Route path="/:id" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

