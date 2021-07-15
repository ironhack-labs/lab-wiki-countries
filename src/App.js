import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
  <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col">
            <CountriesList/>
          </div>
          <div className="col">
          <Route path={'/country/:countryCCA3'}  component={CountryDetails} />
          </div>
        </div>     
    </div>
  </div>
  );
}

export default App;
