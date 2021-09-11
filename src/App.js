import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import {Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <CountriesList/>
      <Route path='/:country' component={CountryDetails} />
    </div>
  );
}

export default App;
