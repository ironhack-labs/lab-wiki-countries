import './App.css';
import axios from 'axios';
//import countries from './countries.json';


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
          {/* <CountriesList listOfCountries={countries} /> */}
          <CountriesList  />
        </div>
      </div>

      <Switch>
        <Route
          path="/country/:alpha3Code"
          //path="/country/:cca3"
          render={(props) => <CountryDetails {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;

// https://restcountries.eu/#api-endpoints-all 

// https://restcountries.eu/rest/v2/all




