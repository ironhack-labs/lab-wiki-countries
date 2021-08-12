import { Switch, Route } from "react-router-dom";
import countriesJSON from './countries.json';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      

      <Switch>
   
        <Navbar> 
        </Navbar>
        
        
        <Route path="/countrydetail/:cca3" component={CountryDetails} />
        
      <Route />
      </Switch>
      <CountriesList countries={countriesJSON} />
    </div>
  );
}

export default App;
