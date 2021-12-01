// import CountriesList from './components/CountriesList'
import Navbar from './components/Navbar'
// import Home from './components/Home'
import countrylist from './countries.json'
import CountryDetails from './components/CountryDetails'



// import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'



function App() {

  // API call to fetch the user
  // const loggedUser = undefined
  // const loggedUser = { username: 'Patito el pato' }

  return (
    <>
      <div class="container">
        <div class="row">
          <Navbar class="col-4" countries={countrylist} />
          <CountryDetails class="col-8" countries={countrylist} />
        </div>
      </div>
    </>
  )
}

export default App
