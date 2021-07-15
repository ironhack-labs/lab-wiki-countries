import './App.css';
import {Switch, Route} from "react-router-dom"
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/countries" component={CountriesList}/>
      <Route path="/countryDetails/:id" component={CountryDetails}/>
    </Switch>
      
    </div>
  );
}

export default App;
