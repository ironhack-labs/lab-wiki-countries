import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container row">
        <CountriesList countries={countries} />
        <Route path="/countries/:countryName" component={CountryDetails} />
      </div>
    </div>
  );
}

export default App;
