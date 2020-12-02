import './App.css';
import Navigation from './Navbar'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route path="/:cca3" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </>
  )
}

export default App;
