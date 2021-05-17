import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Route exact path="/countries/:cca3" component={CountryDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
