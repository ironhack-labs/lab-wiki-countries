import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import CountriesList from "./components/CountriesList/CountriesList";
import CountriesDetail from "./components/CountryDetails/CountryDetails"
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' component={CountriesList} />
        <Route path="/countries/:cca3" component={CoutriesDetail} />
      </Switch>
    </div>
  );
}

export default App;
