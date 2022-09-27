import { Routes, Route } from 'react-router';

import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Navbar />
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/" />
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
