import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from'./countries.json';

function App() {

  const getCountry = (countryAlpha3Code) => {
    return countries.filter((countryObj) => countryObj.alpha3Code === countryAlpha3Code )[0]
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesArr={countries}></CountriesList>

          {/* <CountryDetails callbackToGetCountry={getCountry}></CountryDetails> */}

        </div>
      </div>   
    </div>
  );
}

export default App;
