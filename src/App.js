import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{"display":"flex"}}>
      <CountriesList />
    <Routes>
 
      <Route path='country/:countryId' element={<CountryDetails />} />
    </Routes>
    </div>
    </div>
  );
}

export default App;


