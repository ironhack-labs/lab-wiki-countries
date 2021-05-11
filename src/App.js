import logo from './logo.svg';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
    <div>
      <Navbar />
      <div className="row">
        <div className="col-5">
          <CountriesList />
        </div>
        <div className="col-7">
          <Route exact path="/countries/:countryId" component={CountryDetails} />
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
