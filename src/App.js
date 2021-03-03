import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import { Route, Switch, Link } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList allCountries={countries} />
        </div>
      </div>

      <Switch>
        <Route
          path="/country/:cca3"
          render={(props) => <CountryDetails {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
