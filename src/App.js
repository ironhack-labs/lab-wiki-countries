
import './App.css'
import Navbar from './Navbar'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (

    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList />

          <Switch>
            <Route path="/:cca3" render={props => <CountryDetails {...props} />} />

          </Switch>
        </div>

      </div>
    </>
  );
}

export default App
