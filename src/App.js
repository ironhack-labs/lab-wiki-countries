import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Switch } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div><CountriesList countries={countries} /></div>
          <div>
            <Switch>
            <Route exact path="/:id" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
