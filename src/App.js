import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails'
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <>
        <Navbar />
        <CountriesList />

        <Switch>
          <Route path="/countrydetails/:cca3" render={() => <CountryDetails />} />
        </Switch>
    </>
  );
}

export default App;