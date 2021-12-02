import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList.js';
import CountryDetails from './Components/CountryDetails';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <table className="table table-bordered">
            <CountriesList countries={countries} />
          </table>
        </div>
        <div>
          <Switch>
            <Route
              path="/country/:cca3"
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
