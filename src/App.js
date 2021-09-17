import './App.css';

import { Route } from 'react-router';

import NavBar from './components/Navbar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import countries from './countries.json';

function App() {
  return (
    <div className="contatiner">
      <div className="row">
        <NavBar />
        <CountriesList countries={countries} />
        <Route
          exact
          path="/:cca3"
          render={(routeProps) => (
            <CountryDetails
              countries={countries}
              CCA3={routeProps.match.params.cca3}
            />
          )}
        />
      </div>
    </div>
  );
}

export default App;
