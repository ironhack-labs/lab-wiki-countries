import './App.css';
import NavBar from './NavBar'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div >
      <NavBar />
      <div className='container'>
        <div className='row'>

          <Route path='/' component={CountriesList} />

          <Route path='/countrie/:cca3' component={CountryDetails} />
          

        </div>

      </div>
    </div>
  );
}

export default App;
