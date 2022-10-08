import "./App.css";
import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Countries from "./countries.json"
import { Routes, Route } from 'react-router-dom';


function App() {
  return <div className="App">
    <NavBar />
    <div>
      <Routes>
        <Route path="/:id" element={<CountryDetails countries={Countries} />} />
      </Routes>
      <CountriesList />

    </div>


  </div>;
}
export default App;
