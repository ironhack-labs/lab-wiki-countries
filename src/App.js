import CountriesList from './components/CountriesList';
import countriesJSON from "./countries.json";
import CountryDetails from './components/CountryDetails'
import { Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <CountriesList countries={countriesJSON} />
        <Switch>
          <Route path="/countries/:cca3" component={CountryDetails}/>
        </Switch>
      </div>
      </div>
  );
}

export default App;
