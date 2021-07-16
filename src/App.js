import "./App.css";
import { Switch, Route } from "react-router-dom"; 
import Navbar from './Components/NavBar'; 
import CountryDetails from './Components/CountryDetails';
import CountriesList from './Components/CountriesList'; 


function App() {
  return (
    <div className="Container">
      <Navbar />
      <div className="Countries-list">
        <CountriesList />
      </div>
      <Switch>
        <div className="Country-detail">
          <Route path="/country/:id" component={CountryDetails} />
        </div>
      </Switch>
    </div>
  );
}

export default App;