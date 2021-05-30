import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/countries" component={CountriesList} />
        <Route exact path="/countries/cca3e" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
