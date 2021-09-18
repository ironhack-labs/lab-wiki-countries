import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import countriesJson from './countries.json';

const App = () => {
  const [countries, setCountries] = useState([...countriesJson]);

  // Atualiza o state para conter os arquivos do json
  useEffect(() => {
    setCountries([...countriesJson]);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Route
              path="/:cca3"
              render={(routeProps) => (
                <CountryDetails {...routeProps} countries={countries} />
              )}
            ></Route>
        </div>
      </div>
    </div>
  );
};

export default App;
