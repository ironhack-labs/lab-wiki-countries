import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className="d-flex ">
        <CountriesList />
        <Switch>
          <Route path="/countrydatails/:code" component={CountryDetails} />
        </Switch>
      </div>
    </div >
  );
}

export default App;

