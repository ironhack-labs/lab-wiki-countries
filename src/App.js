import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
// import CountryDetails from "./components/CountryDetails"

function App() {
  return (
    <div className="App">
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
    {/* <Navbar />
    <CountriesList />
    <CountryDetails /> */}
    </div>
  );
}

export default App;
