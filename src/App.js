import NavBar from "./components/Navbar";
import './App.css'
import CountriesList from "./components/CountriesList";
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from "react-router-dom";
import CountriesDetails from "./components/CountriesDetails";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <div className="container">
    <div className="row">
      <CountriesList/>
      {/* React Router Route rendering the CountryDetails should go here */}
    </div>
    <div className="details">
      <Switch>
        <Route path='/:id' render={(props)=>(<CountriesDetails {...props}/>)}/> 
      </Switch>
    </div>
  </div>
    </div>
  );
}

export default App;
