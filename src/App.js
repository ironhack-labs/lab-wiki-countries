import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CountryDetails from './Components/CountryDetails';
import CountriesList from './Components/CountriesList';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <CountriesList />
      <Switch>
        <Route 
        path="/:cca3" 
        component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
