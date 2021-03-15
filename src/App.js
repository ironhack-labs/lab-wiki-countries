import './App.css';
import countries from './countries.json';
import { Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <CountriesList listOfCountries={countries} />
        </div>
      </div>

      <Switch>
        <Route
          path="/country/:cca3"
          render={(props) => <CountryDetails dog="pit bull" {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
