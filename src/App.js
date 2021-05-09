import './App.css';
import { Route, Switch } from 'react-router';
import CountriesList from './components/CountriesList/CountriesList';
import Navbar from './components/Navbar/Navbar';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="d-flex">
          <div className="col-6">
            <CountriesList/>
          </div>
          <Switch >
            <Route exact path="/:cca" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
