import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import countries from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
            <Route exact path="/:cca3" component={CountryDetails} />
        </div>
      </div> */}

      <Switch>
        <Route exact path="/" component={CountriesList} />
        <Route exact path="/:cca3" component={CountryDetails} />
      </Switch>
      
    </div>
  );
}

export default App;
