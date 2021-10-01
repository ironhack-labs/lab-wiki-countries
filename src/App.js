import './App.css';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import countriesJSON from './countries.json';

function App() {
  const countries = [...countriesJSON];

  return (
    <div class="container">
      <div class="row">
        <BrowserRouter>
          <Switch>
            {countries.map((country) => {
              return (
                <>
                  <CountriesList />
                  <Route path={`/${country.cca3}`}>
                    <CountryDetails country={country} />
                  </Route>
                </>
              );
            })}
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
