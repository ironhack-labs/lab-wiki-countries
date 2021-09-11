import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import CountriesList from "./components/CountriesList/CountriesList";
import CountriesDetail from "./components/CountryDetails/CountryDetails"
import './App.css';
import countries from './countries.json'


function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries}/>
      <Switch>
        <Route path="/countries/:cca3" render={(routeProps) => (
          <FadeIn>
          <CountriesDetails {...routeProps} countries={countries}/>
        
        )}/>
        
       
      </Switch>
    </div>
  );
}

export default App;
