import './App.css';
import NavBar from './components/NavBar.jsx';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route exact path="/:cca3" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
