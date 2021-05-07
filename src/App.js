import './App.css';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countries from './countries.json';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
            <Route
              exact
              path="/countries/:id"
              render={(props) => (
                <CountryDetails {...props} countries={countries} />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
