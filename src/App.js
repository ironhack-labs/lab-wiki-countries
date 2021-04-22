import './App.css';
import Navbar from './Components/Navbar'
import CountryDetails from './Components/CountryDetails'
import CountriesList from './Components/CountriesList'
import { Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList />
            <Switch>
              <Route exact path='/country/:countryId' component={CountryDetails} />
            </Switch>
          </div>
        </div>
    </div>
  );
}

export default App;
