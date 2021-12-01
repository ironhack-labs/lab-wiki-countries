import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountriesDetails'
import countries from './countries.json'


import { Switch, Route } from 'react-router-dom'
import './App.css'



function App() {

  return (
    <>
      <Navbar />
      <CountriesList list = {countries}/>
      <Switch>
        <Route path="/detalles/:id" render={(props) => <CountryDetails {...props} />} />
      </Switch>
    </>
  )
}

export default App