import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
        <CountriesList />
        <Routes>
          <Route path="country/:countryId" element={<CountryDetails />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;


