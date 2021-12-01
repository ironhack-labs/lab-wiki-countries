import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import countries from './countries.json';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Switch>
              <Route path="/country/:id" render={(props) => <CountryDetails {...props} />} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
