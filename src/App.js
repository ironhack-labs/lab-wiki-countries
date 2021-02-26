
import './App.css';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar />

    <Router>
      <Switch>
        <Route exact path="/countries" component={CountriesList} />
      </Switch> 

      <Switch>
        <Route exact path="/countries:details" component={CountryDetails} />
      </Switch> 
    </Router>

    </>
  );
}

export default App;
