import countries from './countries.json';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails"
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='App__Components'>
        <CountriesList countries={countries} />
        <Switch>
          <Route path="/countries/:cca3" exact render={routeProps => (
            <CountryDetails {...routeProps} countries={countries}/>
          )} />
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
