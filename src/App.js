import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={CountriesList} />
        <Route exact path="/:cca3" component={CountryDetails} />
      </Switch>
      
    </div>
  );
}

export default App;
