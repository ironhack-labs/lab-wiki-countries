import './App.css';
import Navbar from './components/Navbar'
import {Switch, Route } from "react-router-dom"
import countriesJson from './countries.json'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countriesJson} />
      <Switch>
      <Route
          path="/countries/:cca3"
          render={(historyProps) => {
            return <CountryDetails {...historyProps} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
