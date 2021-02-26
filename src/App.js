import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import CountryDetails from './components/CountryDetails';


function App() {
  return (
    <>
      <Navbar />
    <div className="d-flex justify-content-center">
      <Router>
      <CountriesList/>
        <Switch>
          <Route path="/:pais" component={CountryDetails}/>
        </Switch>
      </Router>
      
    </div>
    </>
  );
}

export default App;
