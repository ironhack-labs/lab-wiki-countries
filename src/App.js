import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import Navbar from './components/NavBar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import Details from './components/CountryDetails/CountryDetails'

import { Switch, Route } from 'react-router-dom'



function App() {
    const allCountries = countries

    let countryMatch = (cca3) =>{
      let country = allCountries.filter((country) =>{
        return country.cca3 === cca3
      })
      return country
    }
    

    return (
      <div className="App">
      <Navbar />

      <CountriesList allCountries = {allCountries}/>

      <Switch>
      <Route path="/eachCountry/:cca3" render={(props) => <Details {...props} countries={allCountries} country={countryMatch(props.match.params.cca3)}/>} />
      </Switch>
      </div>
    );
}
export default App;
