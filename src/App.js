import { Switch, Route } from 'react-router';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import CountryDetails from "./components/CountryDetails/CountryDetails"
import CountriesList from './components/CountriesList/CountriesList';


function App() {
  return (
    <div className="App">

      <Navbar />
      <div className="container">
      <div className="row col-6">
      <CountriesList />

      <Switch>

        <Route path="/countryDetails/:cca3" render={(props) => <CountryDetails {...props} />} />
       
      </Switch>
      </div>
      </div>
    </div>
  );
}

export default App;
