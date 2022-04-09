// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={CountriesList} />
        <Route exact path="/" component={CountriesList} />
        <Route exact path="/:id" component={CountryDetails} />
      </Switch>
    </div>
  );
}
export default App;
