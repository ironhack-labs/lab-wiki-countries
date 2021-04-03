import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import countries from './countries.json';
import AppRouter from './Components/AppRouter';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
   
              <CountriesList countries={countries} />
              {/* React Router Route rendering the CountryDetails should go here */}
            
 
          <AppRouter />

        </div>
      </div>
    </div>

  );
}

export default App;
