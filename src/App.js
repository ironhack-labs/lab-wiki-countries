import { Switch, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import countriesJSON from "./countries.json";
import CountriesList from './Components/CountriesList'
import CountryDetails from './Components/CountryDetails'

function App() {
  return (
    <div className="App">
      <CountriesList countries={countriesJSON}/>
      <Switch>
      <Route path="/countries/:cca3" component={CountryDetails}/>
      </Switch>
    </div>
    );
}

export default App;
