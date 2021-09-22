
import { Route, Switch, } from 'react-router';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import Navbar from './components/Navbar/Navbar';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='row'>
          <CountriesList />
          <Switch>
            <Route path="/country-details/:cca3" render={(props) => <CountryDetails {...props} />} />
            
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;





