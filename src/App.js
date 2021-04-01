import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group">
              <CountriesList countries={countries} />
              {/* React Router Route rendering the CountryDetails should go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
