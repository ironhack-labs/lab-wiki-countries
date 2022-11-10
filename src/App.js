import './App.css';
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import { CountryDetails } from './components/CountryDetails';
import countries from './countries.json';

let countriesListData = countries.map((country) => {
  return {
    alpha3Code: country.alpha3Code,
    name: country.name.common,
  };
});

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesListData} />
          <Routes>
            <Route
              path={':id'}
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
