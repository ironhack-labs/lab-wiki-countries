import { Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <CountriesList />
          </div>
          <div class="col-7">
            <Route path="/:cca3" component={CountryDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
