import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
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
