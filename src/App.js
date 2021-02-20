import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails'
import countriesjson from './countries.json'

function App() {
  let name = countriesjson[0].name.official
  console.log("name", name)
  console.log("countriesjson", countriesjson)
  return (
    <div className="App">
    <Navbar />
    <Switch>
      <Route path="/:countryParams">
        <CountryDetails data={countriesjson} />
      </Route>
      <Route path="/:countryParams">
        <CountryDetails data={countriesjson} />
      </Route>
    </Switch>
      
      <CountriesList data = {countriesjson} />

    </div>
  );
}

export default App;
