import './App.css'
import CountriesList from './CountriesList';
import Navbar from './Navbar'
import CountryDetails from "./CountryDetails"
import { Switch, Route } from 'react-router-dom'




function App() {
  return (
    <>

      <Navbar />
      <CountriesList />

      <Switch>
        <Route path="/:cca3" render={props => <CountryDetails {...props} />} />
      </Switch>

    </>
  );
}

export default App;
