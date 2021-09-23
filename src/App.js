import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {

  return (

    <div className="App">

      <Navbar />

      <div className="container" >

        <div className="row" >

          <div class="col-6">

            <CountriesList />
          </div>

          <div class="col-6">

            <Switch>

              <Route path="/country-details/:cca3" render={(props) => <CountryDetails {...props} />} />

            </Switch>

          </div>

        </div>

      </div>

    </div>

  );
}

export default App;
