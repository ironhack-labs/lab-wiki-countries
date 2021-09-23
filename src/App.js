import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import { Route, Switch } from 'react-router';
import countries from './countries.json'
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Switch>
              <Route exact path="/details" render={() => <CountryDetails />} />
            </Switch>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
