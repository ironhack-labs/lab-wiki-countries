import CountryDetails from './components/CountryDetails';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          {/* React-Router Route rendering the CountryDetails should go here */}
          <BrowserRouter>
            <Routes>
              <Route path="/src/components/CountryDetails.jsx" />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

console.log(countries[0].alpha3Code);

export default App;
