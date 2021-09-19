import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import countriesJson from '../countries.json';

import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetail from './CountryDetail';

function App() {
  // Definindo um state vazio
  const [countries, setCountries] = useState([]);

  // Atualiza o state para conter os países do arquivo JSON assim que o componente App for renderizado na tela
  useEffect(() => {
    setCountries([...countriesJson]);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
            <Route
              path="/:cca3"
              render={(routeProps) => (
                <CountryDetail {...routeProps} countries={countries} />
              )}
            ></Route>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;