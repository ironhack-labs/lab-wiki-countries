import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Switch>
            <Route
              exact
              path="/countries/:watermelon"
              render={(props) => (
                <CountryDetails {...props} countries={countries} />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
