import logo from './logo.svg';
import Navbar from "./components/Navbar/Navbar"
import CountriesList from "./components/CountriesList/CountriesList"
import CountryDetails from "./components/CountryDetails/CountryDetails"
import {Route,Switch,Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="App">
        <Navbar />
        <div style={{display:"flex"}}>
          <CountriesList />
          <Route path="/:country">
              <CountryDetails />
          </Route>
        </div>
    </div>
  );
}

export default App;
