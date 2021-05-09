import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          {/* React Router Route rendering the CountryDetails should go here */}
        </div>
      </div>
    </div>
  );
}

export default App;
