import './App.css';
import NavBar from './components/navbar/NavBar';
import CountriesList from './components/countrieslist/CountriesList';
import CountryDetails from './components/countrydetails/CountryDetails';
import { Switch, Route, } from 'react-router-dom';
import countries from './countries.json'


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Switch className="display">
        <Route 
        exact path="/" 
        exact render={(props) => <CountriesList countries={countries}{...props} />} 
        />
        
        <Route 
        path="/country-details/:countryId"
        render={(props) => <CountryDetails countries={countries}{...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
