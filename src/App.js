// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom"
import NavBar from './Components/NavBar'
import CountriesList from './Components/CountriesList'
import CountryDetails from './Components/CountryDetails'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CountriesList/>
      <Switch>
        <Route path="/countries/:cca3" component={ CountryDetails }/>
      </Switch>
    </div>
  );
}

export default App;
