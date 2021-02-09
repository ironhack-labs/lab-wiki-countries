import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route exact path="/:country" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
