import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route, Redirect } from 'react-router-dom'


const App = () => {
  return (

    <main>
      <Navbar />
      <CountriesList />
      <CountryDetails/>

    </main>

  )



  





}

export default App;
