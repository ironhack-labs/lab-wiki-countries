import Navbar from "./components/Navbar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <h1 className="mt-5">LAB | React WikiCountries</h1>
      <HomePage />
      <Navbar />
      <CountryDetails />
    </div>
  );
}

export default App;
