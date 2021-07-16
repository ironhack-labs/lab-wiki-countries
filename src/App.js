import "./App.css";
import { Switch, Route } from "react-router-dom"; 
import Navbar from './Components/NavBar'; 
import CountryDetail from './Components/CountryDetails';
import CountriesList from './Components/CountriesList'; 
import { route } from 'react-router-dom';


function App() {
  return (
    <div className="Container">
      <Navbar />
      <div className="Countries-list">
        <CountriesList />
      </div>
      <Switch>
        <div className="Country-detail">
          <Route path="/country/:id" component={CountryDetail} />
        </div>
      </Switch>
    </div>
  );
}

export default App;