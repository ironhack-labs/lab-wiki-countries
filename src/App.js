import  { Switch, Route, Redirect } from 'react-router-dom';
import countries from './countries.json';
import Navbar from "./Components/Navbar/Navbar";
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails'

function App() {
  return (
    <div className="container">
     <Navbar />
     {/* <CountryDetails countries={countries} /> */}
     <div className="row">
     <CountriesList countries={countries}  />
      <Route path="/:cca3" render={(props) => <CountryDetails {...props} />} />
     </div>
    </div>
  );
}

export default App;
