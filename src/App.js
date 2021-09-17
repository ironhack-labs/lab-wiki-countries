import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <CountryDetails />
    </div>
  );
}

export default App;
