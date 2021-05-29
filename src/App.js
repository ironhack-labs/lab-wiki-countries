import './App.css';
import countries from './countries.json';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CountryDetails } from './Components/CountryDetails';
import { Navbar } from './Components/Navbar';
import { CountriesList } from './Components/CountriesList';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <div className="mt-5 row">
            <div className="col-md-5 ">
              <CountriesList countries={countries} />
            </div>
            <Switch>
              <div className="col-md-7">
                <Route path="/:country" component={CountryDetails} exact />
              </div>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
